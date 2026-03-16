// BEGIN
export default getDomainInfo = (link) => {
    const result = {};
    const splitedLink1 = link.split('://');

    if (splitedLink1.length == 1) {
        const splitedLink2 = splitedLink1[0].split('/');
        result.scheme = 'http';
        result.name = splitedLink2[0];
    }
    else {
        const splitedLink2 = splitedLink1[1].split('/');
        result.scheme = splitedLink1[0];
        result.name = splitedLink2[0];
    }

    return result;
};
// END