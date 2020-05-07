'use strict';

const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class Recipe extends Schwifty.Model {

    static get tableName() {

        return 'recipes';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            title: Joi.string().required(),
            description: Joi.string(),
            image: Joi.string(),
            ingredients: Joi.string(),
            instructions: Joi.string()
        });
    }
};
