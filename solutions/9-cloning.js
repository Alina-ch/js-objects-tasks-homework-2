// BEGIN
export default (object) => {
    const objectCopy = {};
    const objectKeysArray = Object.keys(object);

    for (const key of objectKeysArray) {
        objectCopy[key] = object[key];
    }
    
    return objectCopy;
};
// END
