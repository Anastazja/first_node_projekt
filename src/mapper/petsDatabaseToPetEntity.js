const petDatabaseToPetEntity = require('./petDatabaseToPetEntity');

const petsDatabaseToPetEntity = (data) => {
    const pets = [];

    for (const petData of data) {
        pets.push(petDatabaseToPetEntity(petData));
    }
    return pets;
};

module.exports = petsDatabaseToPetEntity;
