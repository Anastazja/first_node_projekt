const db = require('./../../lib/db/database');
const connection = db.getConnection();

const dataTypes = require('sequelize');

module.exports = connection.define('users', {
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        age: {
            type: dataTypes.INTEGER
        }
    }, {
    timestamps: false
});