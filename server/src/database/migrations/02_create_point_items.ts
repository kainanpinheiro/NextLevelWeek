import Knex from 'knex';

export async function up(knex: Knex) {
 // CRIAR TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.string('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.string('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

export async function down(knex: Knex) {
// VOLTAR ATRAS (DELETAR TABELA)
    return knex.schema.dropTable('point_items');
}