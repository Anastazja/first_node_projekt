const petEntity = require('./../entity/petEntity');

const petDatabaseToPetEntity = (data) => {
    return petEntity(data.id, data.name, data.owner, data.age);
};

module.exports = petDatabaseToPetEntity;