// BEGIN
export default pick = (data, arrayOfKeys) => {
    if (arrayOfKeys.length === 0) {
        return {};
    }

    const keys = Object.keys(data);
    const result = {};

    for (const key of arrayOfKeys) {
        if (keys.includes(key)) {
            result[key] = data[key];
        } 
    }

    return result;
};
// END