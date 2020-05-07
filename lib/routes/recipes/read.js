'use strict';

const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/recipes/{id}',
    options: {
        notes: 'Get specific recipe by id, authentication is not needed.',
        tags: ['api'],
        validate: {
            params: Joi.object({
                id: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { id } = request.params;
            const { recipeService } = request.services();

            return recipeService.read({ id });
        }

    }
});
