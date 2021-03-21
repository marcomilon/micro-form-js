import { renderForm } from './form'

test('input template', () => {

    let input = [
        {
            "tag": "input",
            "type": "text",
            "name": "username",
            "class": "form-control"
        }
    ]

    expect(renderForm(input)).toBe('<input type="text" name="username" class="form-control">\n')

})

test('multiple input templates', () => {

    let input = [
        {
            "tag": "input",
            "type": "text",
            "name": "username",
            "class": "form-control"
        },
        {
            "tag": "input",
            "type": "password",
            "name": "password",
            "class": "form-control"
        },
        {
            "tag": "input",
            "type": "color",
            "id": "head",
            "name": "head",
            "value": "#e66465"
        }
    ]

    let expected = `<input type="text" name="username" class="form-control">
<input type="password" name="password" class="form-control">
<input type="color" id="head" name="head" value="#e66465">\n`

    expect(renderForm(input)).toBe(expected)

})

test('test button', () => {

    let input = [
        {
            "tag": "button",
            "class": "favorite styled",
            "value": "Add to favorites",
            "type": "button"
        }
    ]

    let expected = `<button class="favorite styled" type="button">
Add to favorites
</button>\n`;

    expect(renderForm(input)).toBe(expected)

})

test('test select', () => {

    let input = [
        {
            "tag": "select",
            "name": "pets",
            "id": "pet-select",
            "value": [
                {
                    "tag": "option",
                    "label": "--Please choose an option--",
                    "value": ""
                },
                {
                    "tag": "option",
                    "label": "Dog",
                    "value": "dog"
                },
                {
                    "tag": "option",
                    "label": "Cat",
                    "value": "cat"
                }
            ]
        }
    ]

    let expected = `<select name="pets" id="pet-select">
<option value="">--Please choose an option--</option>
<option value="dog">Dog</option>
<option value="cat">Cat</option>
</select>\n`

    expect(renderForm(input)).toBe(expected)

})

test('test textarea', () => {

    let input =  [
        {
            "tag": "textarea",
            "id": "story",
            "name": "story",
            "rows": "5",
            "cols": "33",
            "value": "It was a dark and stormy night..."
        }
    ]

    let expected = `<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>\n`

    expect(renderForm(input)).toBe(expected)

})