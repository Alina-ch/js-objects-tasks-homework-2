import _ from 'lodash';

// BEGIN
export default (text) => {
    const result = {};
    const textAsArray = _.words(text.toLowerCase());

    for (const word of textAsArray) {
        if (Object.hasOwn(result, word)) {
            result[word] += 1;
        }
        else {
            result[word] = 1;
        }
    }
    
    return result;
};
// END