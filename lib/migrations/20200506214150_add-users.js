'use strict';

const tableName = 'users';

exports.up = async (knex) => {

    await knex.schema.createTable(tableName, (table) => {

        table.increments('id').primary();
        table.string('username', 100).notNullable().unique();
        table.string('name').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = async (knex) => {

    await knex.schema.dropTable(tableName);
};
