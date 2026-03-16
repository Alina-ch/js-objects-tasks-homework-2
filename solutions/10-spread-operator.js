// BEGIN
export default (companyName, features = {}) => {
    const result = {name: companyName, state: 'moderating', ...features, createdAt: Date.now()};

    return result;
};
// END