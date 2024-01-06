const getAge = require('get-age');

const getAgePlugin = (birthdate) => {
    if (!birthdate) return new Error('Birthdate es requerido');

    return getAge(birthdate);
}

module.exports = {
    getAgePlugin,
}