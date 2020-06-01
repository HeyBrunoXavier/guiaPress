const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress','root','Bruno5230',{
    host:'localhost',
    dialect:'mysql',
    timezone: "-03:00"
});

module.exports = connection;