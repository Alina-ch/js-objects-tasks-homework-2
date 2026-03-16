// BEGIN
export default (firstObject, secondObject) => {
    if (firstObject.name == secondObject.name && firstObject.state == secondObject.state && firstObject.website == secondObject.website) {
        return true;
    }

    return false;
};
// END