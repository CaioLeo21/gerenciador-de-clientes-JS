exports.up = function(knex) {
    return knex.schema.createTable('tbl_users', table => {
        table.increments('id_user').primary(),
        table.string('username').unique().notNull(),
        table.string('senha').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbl_users')
};