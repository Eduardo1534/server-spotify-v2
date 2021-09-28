const Sequelize = require("sequelize")
const sequelize = new Sequelize('spotify','root','potato153467', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize