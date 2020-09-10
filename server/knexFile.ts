import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'DataBase', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'DataBase', 'migrations')
    },
    useNullAsDefault: true,
};