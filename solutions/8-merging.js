import _ from 'lodash';

// BEGIN
export default (object1, keysToChange, object2) => {
    if (keysToChange.length === 0) {
        return Object.assign(object1, object2);
    }
    
    const currentObject = {};
    for (const key of keysToChange) {
        if (Object.hasOwn(object1, key) && Object.hasOwn(object2, key)) {
            currentObject[key] = object2[key];
        }
    }
    
    return Object.assign(object1, currentObject);
};
// END