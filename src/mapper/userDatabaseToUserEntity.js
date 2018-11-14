const userEntity = require('./../entity/userEntity');

const userDatabaseToUserEntity = (data) => {
    return userEntity(data.id, data.name, data.description, data.age);
};

module.exports = userDatabaseToUserEntity;
