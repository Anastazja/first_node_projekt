const db = require('./../../lib/db/database');
const connection = db.getConnection();

const dataTypes = require('sequelize');

module.exports = connection.define('pets', {
        name: {
            type: dataTypes.STRING
        },
        owner: {
            type: dataTypes.STRING
        },
        age: {
            type: dataTypes.INTEGER
        }
    }, {
    timestamps: false
});