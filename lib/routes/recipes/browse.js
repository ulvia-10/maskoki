'use strict';

const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/recipes',
    options: {
        notes: 'Get all recipes, authentication is not needed.',
        tags: ['api'],
        handler: async (request, h) => {

            const { recipeService } = request.services();
            const recipes = await recipeService.browse();

            return recipes;
        }
    }
});
