// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    const output = {}
    for (let i = 0; i < keys.length; i ++){
        output[keys[i]] = vals[i] || null
    }
    return output
}
