const Sequelize = require('sequelize');
const Connection = require('../database/database');
const Category = require('../categories/Category');

const Article = Connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); //Relacionamento entre as tabela Article e Category 1 p Muitos.
Article.belongsTo(Category); //Relacionamento entre as tabelas Article e Category 1 p 1.

module.exports = Article;