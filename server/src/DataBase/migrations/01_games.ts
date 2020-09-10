import Knex from 'knex';


export async function up(knex:Knex){
// faco o que quero
    return knex.schema.createTable('games', table =>{
        table.increments('id').primary();
        table.string('nameGame').nullable();
        table.string('photo').nullable();
        table.string('platform').nullable();
        table.string('state').nullable();
        table.string('generous').nullable();
        table.integer('cost').nullable();
        table.string('bio');

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')


    });
};

export async function down(knex:Knex){
// se der ruim, desfazer
    return knex.schema.dropSchema('games')
};
