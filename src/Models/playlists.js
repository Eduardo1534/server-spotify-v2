const Sequelize = require("sequelize")
const database = require("../Database/db")


const Playlist = database.define('playlist',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    music:{
        type: Sequelize.STRING
    },
    title:{
        type: Sequelize.STRING
    },
    authors:{
        type: Sequelize.STRING
    },
    icon:{
        type: Sequelize.STRING
    }
});

module.exports = Playlist