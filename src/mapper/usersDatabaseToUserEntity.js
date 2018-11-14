const userDatabaseToUserEntity = require('./userDatabaseToUserEntity');

const usersDatabaseToUserEntity = (data) => {
    const users = [];

    for (const userData of data) {
        users.push(userDatabaseToUserEntity(userData));
    }
    return users;
};

module.exports = usersDatabaseToUserEntity;

