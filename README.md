# micro-form-js

A port of micro-form to JavaScript. The goal of this library is to be able to generate an Html Form from JSON.

## Example

**Examples**

**Input**

```javascript

json = [
    {
        "tag": "input",
        "type": "text",
        "name": "username",
        "class": "form-control"
    }
]

console.log(renderForm(input))
```

*output*

```html 
<input type="text" name="username" class="form-control">
```

**Textarea**

```javascript

json = [
    {
        "tag": "textarea",
        "id": "story",
        "name": "story",
        "rows": "5",
        "cols": "33",
        "value": "It was a dark and stormy night..."
    }
]

console.log(renderForm(input))
```

*output*

```html
<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

**Select**

```javascript

json = [
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
];

console.log(renderForm(input))
```

*output*

```html
<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
</select>
```

### Contribution

Feel free to contribute! Just create a new issue or a new pull request.

### License

This library is released under the MIT License.