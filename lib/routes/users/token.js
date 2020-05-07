'use strict';

const Joi = require('@hapi/joi');
const Helpers = require('../helpers');

module.exports = Helpers.withDefaults({
    method: 'post',
    path: '/users/token',
    options: {
        tags: ['api'],
        validate: {
            payload: Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { username, password } = request.payload;
            const { userService, displayService } = request.services();

            const userFound = async (txn) => {

                return await userService.read({ username, password }, txn);
            };

            const user = await h.context.transaction(userFound);
            const token = await userService.createToken(user.id);

            return displayService.user(user, token);
        }
    }
});
