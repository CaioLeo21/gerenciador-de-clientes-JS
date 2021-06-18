// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'clientesdb',
      user:     'postgres',
      password: 'admin'
    },

    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      directory: './db/migrations'
    },

    seeds: {
      directory: './db/seeds'
    }

};
