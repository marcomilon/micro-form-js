import { expandAttr } from './form';

test('expand attributes for html tags', () => {
    let jsonObj = {
        "id": "username",
        "type": "text",
        "name": "username",
        "class": "form-control"
    }

    expect(expandAttr(jsonObj)).toBe('id="username" type="text" name="username" class="form-control"');
});

test('expand attributes for html tags with remoteAttr', () => {
    let jsonObj = {
        "id": "username",
        "type": "text",
        "name": "username",
        "class": "form-control"
    }

    let removeAttr = [
        'class', 
        'name'
    ]

    expect(expandAttr(jsonObj, removeAttr)).toBe('id="username" type="text"');
});