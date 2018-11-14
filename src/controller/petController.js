const petSchema = require('./../validator/petSchema');
const petDatabaseToPetEntity = require('../mapper/petDatabaseToPetEntity');
const petsDatabaseToPetEntity = require('../mapper/petsDatabaseToPetEntity');
const Joi = require('joi');

const getAll = (req, res) => {
    const pet = require('./../model/pet');
    pet.findAll().then(data => {
        res.send(petsDatabaseToPetEntity(data));
    });
};

const get = (req, res) => {
    const pet = require('./../model/pet');
    pet.findByPk(req.params.id).then(data => {
        if (data === null) {
            res.status(404);
            return res.send('Pet not found :(');
        }
        res.send(petDatabaseToPetEntity(data));
    });
};

const create = (req, res) => {
    const pet = require('./../model/pet');
    const result = Joi.validate(req.body, schema);
    if (result.error !== null) {
        result.error.status = 400;
        throw result.error;
    }
    pet.create({
            name: req.body.name,
            owner: req.body.owner,
            age: req.body.age
        }
    )
        .then((data) => {
            res.send(data)
        });
};

const edit = (req, res) => {
    const pet = require('./../model/pet');
    const result = Joi.validate(req.body, petSchema);
    if (result.error !== null) {
        result.error.status = 400;
        throw result.error;
    }
    pet.update(
        {
            name: req.body.name,
            owner: req.body.owner,
            age: req.body.age
        },
        {where: {id: req.params.id}}
    ).then(data => {
        if (data[0] === 0) {
            return res.send('Nothing changed');
        }
        pet.findByPk(req.params.id).then(data => {
            res.send(petDatabaseToPetEntity(data));
        });
    });
};

const remove = (req, res) => {
    //todo id validation
    const pet = require('./../model/pet');
    pet.destroy({where: {id: req.params.id}}).then(data => {
            if (data === 0) {
                return res.send('Nothing changed');
            }
            res.send(`${data} deleted`);
        }
    );
};

module.exports = {get, getAll, create, edit, remove};
