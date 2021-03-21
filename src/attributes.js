export function expandAttr(attributes, removaAttr) {

    let out = ''

    Object.keys(attributes).forEach(function(k) {

        if(removaAttr && removaAttr.includes(k)) {
            return
        }

        out += k + '="' + attributes[k] + '" '
    });

    return out.trim()
}