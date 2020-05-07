'use strict';

const Schmervice = require('schmervice');

module.exports = class DisplayService extends Schmervice.Service {

    user({ password, ...user }, token) {

        return { ...user, token };
    }

    // async transactions(currentUserId, transactions, txn) {

    //     const { Transaction } = this.server.models();

    //     const results = await Transaction.loadRelated(transactions, `[
    //         account(currentUser) as account
    //     ]`, {
    //         currentUser: (builder) => builder.where('users.id', currentUserId)
    //     }, txn);

    //     return results;
    // }
};
