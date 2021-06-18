exports.up = function(knex) {
    return knex.schema.createTable('tbl_clientes', table => {
        table.increments('id_cliente').primary(),
        table.string('nome').notNull(),
        table.string('telefone').notNull(),
        table.string('rua'),
        table.string('bairro'),
        table.string('numero_casa'),
        table.string('complemento'),
        table.string('cpf').unique(),
        table.string('cnpj').unique(),
        table.integer('id_user').references('id_user')
            .inTable('tbl_users').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tbl_clientes')
};

