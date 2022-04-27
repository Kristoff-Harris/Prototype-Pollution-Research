// https://huntr.dev/bounties/b39651e5-4a7e-49af-a84b-9618d8e04b60/
export const setByPath = function(obj, path, value, delimiter) {

    const keys = Array.isArray(path) ? path : path.split(delimiter || '/');
    const last = keys.length - 1;
    let diver = obj;
    let i = 0;

    for (; i < last; i++) {
        const key = keys[i];
        const value = diver[key];
        // diver creates an empty object if there is no nested object under such a key.
        // This means that one can populate an empty nested object with setByPath().
        diver = value || (diver[key] = {});
    }

    diver[keys[last]] = value;

    return obj;
};

export const unsetByPath = function(obj, path, delimiter) {

    const keys = Array.isArray(path) ? path : path.split(delimiter || '/');
    const last = keys.length - 1;
    let diver = obj;
    let i = 0;

    for (; i < last; i++) {
        const key = keys[i];
        const value = diver[key];
        if (!value) return obj;
        diver = value;
    }

    delete diver[keys[last]];

    return obj;
};
