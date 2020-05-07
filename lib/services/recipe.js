'use strict';

const Schmervice = require('schmervice');

module.exports = class RecipeService extends Schmervice.Service {

    async browse(where = {}, txn) {

        const { Recipe } = this.server.models();
        return await Recipe.query(txn)
            .where(where);
    }

    async read(where = {}, txn) {

        const { Recipe } = this.server.models();
        return await Recipe.query(txn).first()
            .where(where);
    }
};
