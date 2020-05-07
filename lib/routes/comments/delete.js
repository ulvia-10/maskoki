'use strict';

const Boom = require('@hapi/boom');
const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'delete',
    path: '/comments/{id}',
    options: {
        notes: 'Delete specific comment by id, authentication is needed',
        tags: ['api'],
        auth: 'jwt',
        validate: {
            headers: Joi.object({
                'Authorization': Joi.string().required()
            }),
            params: Joi.object({
                id: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { id } = request.params;
            const { commentService } = request.services();
            const currentUserId = Helpers.currentUserId(request);

            const comment = await commentService.read({ id });

            if (comment.user_id !== currentUserId) {
                throw Boom.forbidden();
            }

            return commentService.delete(id);
        }
    }
});
