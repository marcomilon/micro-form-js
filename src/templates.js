import { expandAttr } from './attributes'

export const buttonTpl = (attributes) => `<button ${expandAttr(attributes, ['tag', 'value'])}>
${attributes['value'] ?? 'Submit'}
</button>\n`

export const inputTpl = (attributes) => `<input ${expandAttr(attributes, ['tag'])}>\n`

export const selectTpl = (attributes) => `<select ${expandAttr(attributes, ['tag', 'value'])}>
${attributes.value.map(option => (
    `<option ${expandAttr(option, ['label', 'tag'])}>${option.label}</option>\n`
)).join('').trim()}
</select>\n`

export const textareaTpl = (attributes) => `<textarea ${expandAttr(attributes, ['tag', 'value'])}>
${attributes.value ?? ''}
</textarea>\n`