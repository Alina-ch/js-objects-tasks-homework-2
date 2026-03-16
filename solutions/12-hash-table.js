import crc32 from 'crc-32';

// BEGIN
const TABLE_SIZE = 1000;

const make = () => [];

const set = (map, key, value) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % TABLE_SIZE;

    if (map[index] === undefined || (map[index] !== undefined && map[index][0] === key)) {
        map[index] = [key, value];
        return true;
    }

    return false;
};

const get = (map, key, defaultValue = null) => {
    const hash = crc32.str(key);
    const index = Math.abs(hash) % TABLE_SIZE;

    if (map[index] !== undefined && map[index][0] === key) {
        return map[index][1];
    }

    return defaultValue;
};

export {make, get, set};

// END