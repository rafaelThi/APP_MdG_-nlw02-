import Knex from 'knex';


export async function up(knex:Knex){
// faco o que quero
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('city').nullable();
        table.string('nameSalesman').nullable();
        table.integer('whatsapp').nullable();   
    })
};

export async function down(knex:Knex){
// se der ruim, desfazer
    return knex.schema.dropSchema('users')
};
