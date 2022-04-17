module.exports = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || 'postgres',
    operatorsAlieses: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};