'use strict';

const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'post',
    path: '/recipes/{recipeId}/comments',
    options: {
        notes: 'Add comment into specific recipe, authentication needed.',
        tags: ['api'],
        auth: 'jwt',
        validate: {
            headers: Joi.object({
                'Authorization': Joi.string().required()
            }),
            params: Joi.object({
                recipeId: Joi.string().required()
            }),
            payload: Joi.object({
                comment: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { recipeId } = request.params;
            const { payload } = request;
            const { commentService } = request.services();
            const currentUserId = Helpers.currentUserId(request);

            const response = async (txn) => {

                const id = await commentService.add({
                    recipe_id: recipeId,
                    user_id: currentUserId,
                    ...payload
                });
                return await commentService.read({ id }, txn);
            };

            const comment = await h.context.transaction(response);
            return comment;
        }
    }
});
