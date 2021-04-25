/* eslint-disable import/no-commonjs */

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const { children } = require('./.reflection.json')

const modules = glob.sync(path.resolve(__dirname, '*.d.ts')).map((module) => {
  const name = path.basename(module, '.d.ts')
  const child = children.find((c) => c.name === name)
  return {
    name,
    comment: child.comment,
    functions: child.groups.find((g) => g.title === 'Functions'),
    children: child.children,
  }
})

for (const module of modules) {
  fs.writeFileSync(
    path.resolve(__dirname, 'docs', `${module.name}.md`),
    formatModule(module),
    'utf-8'
  )
}

function formatTableOfContents(module) {
  const categories = module.functions.categories.map((category) => {
    const entries = category.children
      .map((i) => module.children.find((c) => c.id === i))
      .map((child) => li(createLink(child.name), 2))

    return li(createLink(category.title), 1) + '\n' + entries.join('\n')
  })

  return h('Table of contents', 2) + '\n\n' + categories.join('\n')
}

function formatModule(module) {
  const categories = module.functions.categories.map((category) => {
    const contents = category.children
      .map((i) => module.children.find((c) => c.id === i))
      .map((c) => {
        const isVariadic = ['compose', 'pipe'].includes(c.name)
        const signatures = isVariadic
          ? c.signatures.slice(0, 3)
          : // Right now, the only normal functions that have multiple signatures
            // are predicates that also support type guards. In those cases, we want
            // to show the normal signature first, so we reverse the results.
            c.signatures.filter((s) => s.comment != null).reverse()
        const comment = signatures[0] && signatures[0].comment
        return (
          h(c.name, 4) +
          '\n\n<!-- prettier-ignore-start -->\n```typescript\n' +
          signatures.map(formatCallSignature).join('\n') +
          '\n```\n<!-- prettier-ignore-end -->\n\n' +
          (comment ? formatComment(comment) : '') +
          '\n\n---'
        )
      })

    return h(category.title, 3) + '\n\n' + contents.join('\n\n')
  })
  const moduleName = module.name === 'index' ? 'iiris' : `iiris/${module.name}`

  return (
    h(`Module \`${moduleName}\``, 1) +
    '\n\n' +
    (module.comment ? formatComment(module.comment) + '\n\n' : '') +
    formatTableOfContents(module) +
    '\n\n' +
    categories.join('\n\n') +
    '\n'
  )
}

function createLink(linkText, url) {
  let target = url
    ? url.includes(')')
      ? '<' + url + '>'
      : url
    : '#' +
      linkText
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^-\w]+/, '')
  return `[${linkText}](${target})`
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
      .replace(/{@link (\S+)\s*(\S+)?}/g, (_, target, text) =>
        text ? createLink(text.trim(), target) : createLink(target)
      )

  return (
    render(comment.shortText) +
    (comment.text ? '\n\n' + render(comment.text) : '') +
    (comment.tags ? '\n\n' + formatCommentTags(comment.tags) : '')
  )
}

function li(content, level) {
  return ' '.repeat((level - 1) * 2) + '- ' + content
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
    '\n\n</details>' +
    (see ? '\n\n**See also:** ' + see : '')
  )
}
