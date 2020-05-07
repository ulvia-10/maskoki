'use strict';

const tableName = 'recipes';

exports.up = async (knex) => {

    await knex.schema.createTable(tableName, (table) => {

        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description');
        table.string('image');
        table.text('ingredients');
        table.text('instructions');
    });
};

exports.down = async (knex) => {

    await knex.schema.dropTable(tableName);
};
