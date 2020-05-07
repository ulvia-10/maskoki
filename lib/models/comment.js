'use strict';

const Schwifty = require('schwifty');
const Joi = require('@hapi/joi');

module.exports = class Comment extends Schwifty.Model {

    static get tableName() {

        return 'comments';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            user_id: Joi.number().integer().greater(0).required(),
            recipe_id: Joi.number().integer().greater(0).required(),
            comment: Joi.string().required()
        });

    }
};
