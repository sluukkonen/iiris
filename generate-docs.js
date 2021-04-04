/* eslint-disable import/no-commonjs */

const fs = require('fs')
const path = require('path')
const { children, groups } = require('./.reflection.json')

const README = path.resolve(__dirname, 'README.md')

const categoryOrdering = [
  'Basic array operations',
  'Transforming arrays',
  'Reducing arrays',
  'Searching arrays with a predicate',
  'Searching arrays by value',
  'Grouping arrays by key',
  'Building arrays',
  'Slicing arrays',
  'Sorting arrays',
  'Zipping arrays',
  'Set operations',
  'Object',
  'Function',
  'Getters and setters',
  'Relation',
  'Math',
  'Logic',
  'String',
  'Type tests',
]

// We show more than one overload for these functions.
const variadicFunctions = ['compose', 'pipe']

const categories = groups
  .find((g) => g.title === 'Functions')
  .categories.sort(
    (c1, c2) =>
      categoryOrdering.indexOf(c1.title) - categoryOrdering.indexOf(c2.title)
  )

const tableOfContents = categories
  .map((category) => {
    const entries = category.children
      .map(findChild)
      .map((c) => createLink(c.name))

    return `  - ${createLink(category.title)}
${entries.map((e) => `    - ${e}`).join('\n')}`
  })
  .join('\n')

const apiReference = categories
  .map((category) => {
    return `### ${category.title}

${category.children
  .map(findChild)
  .map((c) => {
    const isVariadic = variadicFunctions.includes(c.name)
    const signatures = isVariadic
      ? c.signatures.slice(0, 3)
      : // Right now, the only normal functions that have multiple signatures
        // are predicates that also support type guards. In those cases, we want
        // to show the normal signature first, so we reverse the results.
        c.signatures.filter((s) => s.comment != null).reverse()
    const comment = signatures[0] && signatures[0].comment
    return `#### ${c.name}

\`\`\`typescript
${signatures.map(formatCallSignature).join('\n')}
\`\`\`

${comment ? formatComment(comment) : ''}

---`
  })
  .join('\n\n')}`
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

function findChild(i) {
  return children.find((c) => c.id === i)
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
      .trimEnd()
      .replace(/{@link ([^}]*)}/g, (_, target) =>
        target[0] === target[0].toLowerCase() ? createLink(target) : target
      )

  return `${render(comment.shortText)}${
    comment.text ? `\n\n${render(comment.text)}` : ''
  }${comment.tags ? formatCommentTags(comment.tags) : ''}`
}

function formatCommentTags(tags) {
  const example = tags
    .filter((t) => t.tag === 'example')
    .map((t) => t.text.trimEnd())
    .join('')
  const see = tags
    .filter((t) => t.tag === 'see')
    .map((t) => createLink(t.text.trim()))
    .join(', ')

  return `\n\n**Example:**${example}${see ? `\n\n**See also:** ${see}` : ''}`
}
