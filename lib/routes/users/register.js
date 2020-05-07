'use strict';

const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'post',
    path: '/users/register',
    options: {
        notes: 'Register new user',
        tags: ['api'],
        validate: {
            payload: Joi.object({
                username: Joi.string().required(),
                name: Joi.string().required(),
                password: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { payload } = request;
            const { userService, displayService } = request.services();

            const task = async (txn) => {

                const id = await userService.add(payload, txn);

                return await userService.read({ id }, txn);
            };

            const user = await h.context.transaction(task);
            const token = await userService.createToken(user.id);

            return displayService.user(user, token);
        }
    }
});
