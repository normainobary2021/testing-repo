    
const stringLength = str => {
    if (str.length < 1 || str.length > 10) {
        throw new Error('String length must be between 1 and 10');
    }

    return str.length;
}

module.exports = stringLength;

