/* eslint-disable import/no-commonjs */

const fs = require('fs')
const path = require('path')
const { children } = require('./.reflection.json')

const README = path.resolve(__dirname, 'README.md')

const modules = [
  { name: 'index', title: 'Core (iiris)', categories: [] },
  { name: 'array', title: 'Array (iiris/array)', categories: [] },
  { name: 'object', title: 'Object (iiris/object)', categories: [] },
  { name: 'map', title: 'Map (iiris/map)', categories: [] },
  { name: 'set', title: 'Set (iiris/set)', categories: [] },
  { name: 'string', title: 'String (iiris/string)', categories: [] },
].map((m) => {
  const child = children.find((c) => c.name === m.name)
  return {
    ...m,
    comment: child.comment,
    functions: child.groups.find((g) => g.title === 'Functions'),
    children: child.children,
  }
})

// We show more than one overload for these functions.
const variadicFunctions = ['compose', 'pipe']

const findChild = (children) => (i) => children.find((c) => c.id === i)

const tableOfContents = modules
  .map((module) => {
    const categories = module.functions.categories.map((category) => {
      const entries = category.children
        .map(findChild(module.children))
        .map((child) => '\n' + li(createLink(child.name), 3))

      return '\n' + li(createLink(category.title), 2) + entries.join('')
    })

    return li(createLink(module.title), 1) + categories.join('')
  })
  .join('\n')

const apiReference = modules
  .map((module) => {
    const categories = module.functions.categories.map((category) => {
      const contents = category.children
        .map(findChild(module.children))
        .map((c) => {
          const isVariadic = variadicFunctions.includes(c.name)
          const signatures = isVariadic
            ? c.signatures.slice(0, 3)
            : // Right now, the only normal functions that have multiple signatures
              // are predicates that also support type guards. In those cases, we want
              // to show the normal signature first, so we reverse the results.
              c.signatures.filter((s) => s.comment != null).reverse()
          const comment = signatures[0] && signatures[0].comment
          return (
            h(c.name, 5) +
            '\n\n```typescript\n' +
            signatures.map(formatCallSignature).join('\n') +
            '\n```\n\n' +
            (comment ? formatComment(comment) : '') +
            '\n\n---'
          )
        })

      return h(category.title, 4) + '\n\n' + contents.join('\n\n')
    })
    return (
      h(module.title, 3) +
      (module.comment ? '\n\n' + formatComment(module.comment) : '') +
      '\n\n' +
      categories.join('\n\n')
    )
  })
  .join('\n\n')

fs.writeFileSync(
  README,
  fs
    .readFileSync(README, 'utf-8')
    .replace(
      /(<!-- BEGIN TOC -->)(.*)(<!-- END TOC -->)/ms,
      `$1\n${tableOfContents}\n$3`
    )
    .replace(
      /(<!-- BEGIN API -->)(.*)(<!-- END API -->)/ms,
      `$1\n${apiReference}\n$3`
    )
)

function createLink(linkText) {
  let anchor = linkText
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^-\w]+/, '')
  return `[${linkText}](#${anchor})`
}

function formatCallSignature(signature) {
  const { typeParameter, parameters, type } = signature

  const typeParameters = typeParameter
    ? `<${typeParameter.map(formatTypeParameter).join(', ')}>`
    : ''
  const parameterList = (parameters || [])
    .map(
      (p) => `${p.name}: ${p.flags.isRest ? '...' : ''}${formatType(p.type)}`
    )
    .join(', ')

  return `${typeParameters}(${parameterList}) => ${formatType(type)}`
}

function formatTypeParameter(typeParameter) {
  const { name, type } = typeParameter

  return `${name}${type ? ` extends ${formatType(type)}` : ''}`
}

function formatType(type) {
  switch (type.type) {
    case 'array': {
      const formatted = formatType(type.elementType)
      // Show complex types that include whitespace with Array<...> to avoid
      // precedence issues.
      return formatted.includes(' ') ? `Array<${formatted}>` : `${formatted}[]`
    }
    case 'indexedAccess':
      return `${formatType(type.objectType)}[${formatType(type.indexType)}]`
    case 'intersection':
      return type.types.map(formatType).join(' & ')
    case 'intrinsic':
      return type.name
    case 'literal':
      return String(type.value)
    case 'mapped':
      return `Record<${formatType(type.parameterType)}, ${formatType(
        type.templateType
      )}>`
    case 'named-tuple-member':
      return `${type.name}: ${formatType(type.element)}`
    case 'reflection': {
      return formatCallSignature(
        type.declaration.indexSignature || type.declaration.signatures[0]
      )
    }
    case 'predicate':
      return `${type.name} is ${formatType(type.targetType)}`
    case 'reference':
      return type.name === 'Widen'
        ? 'T'
        : `${type.name}${formatTypeArguments(type.typeArguments)}`
    case 'tuple':
      return `[${type.elements.map(formatType).join(', ')}]`
    case 'typeOperator':
      return formatTypeOperator(type)
    case 'union':
      return type.types.map(formatType).join(' | ')
    default:
      throw new Error(`Unknown type: ${type.type}`)
  }
}

function formatTypeArguments(typeArguments) {
  return typeArguments ? `<${typeArguments.map(formatType).join(', ')}>` : ''
}

function formatTypeOperator(type) {
  const target = formatType(type.target)
  switch (type.operator) {
    case 'keyof':
      return `keyof ${target}`
    case 'readonly':
      return target
    default:
      throw new Error(`Unknown type operator: ${type.operator}`)
  }
}

function formatComment(comment) {
  const render = (text) =>
    text
      .trim()
      .replace(/{@link ([^}]*)}/g, (_, target) =>
        target[0] === target[0].toLowerCase() ? createLink(target) : target
      )

  return (
    render(comment.shortText) +
    (comment.text ? '\n\n' + render(comment.text) : '') +
    (comment.tags ? '\n\n' + formatCommentTags(comment.tags) : '')
  )
}

function li(content, level) {
  return ' '.repeat(level * 2) + '- ' + content
}

function h(content, level) {
  return '#'.repeat(level) + ' ' + content
}

function formatCommentTags(tags) {
  const example = tags
    .filter((t) => t.tag === 'example')
    .map((t) => t.text.trim())
    .join('')
  const see = tags
    .filter((t) => t.tag === 'see')
    .map((t) => createLink(t.text.trim()))
    .join(', ')

  return (
    '<details><summary>Example</summary>\n\n' +
    example +
    '\n</details>' +
    (see ? '\n\n**See also:** ' + see : '')
  )
}
