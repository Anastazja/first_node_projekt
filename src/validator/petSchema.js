const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    owner: Joi.string().alphanum().min(3).max(30),
    age: Joi.number().integer().min(0).max(150).required()
});

module.exports = schema;