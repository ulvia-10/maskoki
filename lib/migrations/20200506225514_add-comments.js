'use strict';

const tableName = 'comments';

exports.up = async (knex) => {

    await knex.schema.createTable(tableName, (table) => {

        table.increments('id').primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').inTable('recipes');
        table.string('comment');
    });

};

exports.down = async (knex) => {

};
