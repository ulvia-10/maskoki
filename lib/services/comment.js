'use strict';

const Schmervice = require('schmervice');

module.exports = class CommentService extends Schmervice.Service {

    async browse(where = {}, txn) {

        const { Comment } = this.server.models();
        return await Comment.query(txn)
            .where(where);
    }

    async read(where = {}, txn) {

        const { Comment } = this.server.models();
        return await Comment.query(txn)
            .throwIfNotFound()
            .first()
            .where(where);
    }

    async edit(id, data, txn) {

        const { Comment } = this.server.models();

        return await Comment.query(txn)
            .throwIfNotFound()
            .where({ id })
            .patch(data);
    }

    async add(data, txn) {

        const { Comment } = this.server.models();

        return await Comment.query(txn)
            .insert(data);
    }

    async delete(id, txn) {

        const { Comment } = this.server.models();

        return await Comment.query(txn)
            .throwIfNotFound()
            .delete()
            .where({ id });
    }

};
