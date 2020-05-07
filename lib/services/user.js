'use strict';

const Schmervice = require('schmervice');
const JWT = require('jsonwebtoken');

module.exports = class UserService extends Schmervice.Service {

    async read(where = {}, txn) {

        const { User } = this.server.models();

        return await User.query(txn).throwIfNotFound().first().where(where);
    }

    async add(user, txn) {

        const { User } = this.server.models();
        const { id } = await User.query(txn).insert(user);

        return id;
    }

    async createToken(id) {

        return await JWT.sign({ id }, this.options.jwtKey, {
            algorithm: 'HS256',
            expiresIn: '7d'
        });
    }
};
