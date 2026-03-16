// BEGIN
export default (listWithNames) => {
    const sortedNames = [];

    for (const element of listWithNames) {
        const { name } = element;
        sortedNames.push(name);
    }
    
    return sortedNames.sort();
};

// END