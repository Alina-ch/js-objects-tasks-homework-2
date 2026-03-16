// BEGIN
export default (object, arrayOfKeys) => {
    let tmp = object;
    for (const key of arrayOfKeys) {
        if (Object.hasOwn(tmp, key)) {
            tmp = tmp[key];
        }
        else {
            return null;
        }
    }
    
    return tmp;
};
// END