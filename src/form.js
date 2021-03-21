import { inputTpl, buttonTpl, selectTpl, textareaTpl } from './templates'

export function renderForm(source) {

    let form = ''

    source.forEach(function (attributes) {

        let input = attributes.tag

        switch(input) {
            case 'input':
                form += inputTpl(attributes)
            break
            case 'button':
                form += buttonTpl(attributes)
            break
            case 'select':
                form += selectTpl(attributes)
            break
            case 'textarea':
                form += textareaTpl(attributes)
            break
        }

    });

    return form

}