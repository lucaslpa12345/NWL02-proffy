import knex from 'knex'

export async function up(knex: knex ) { 
   return knex.schema.createTable('connections', table => { 
        table.increments('id').primary() ; 
       
        
      
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNullable()
       
   })
}

export async function down(knex:knex) { 
   return   knex.schema.dropTable('users')
}