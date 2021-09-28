const express = require('express')
const router = express.Router()
const db = require("../Database/db")
const model = require("../Models/playlists")

router.post('/adicionarMusicas', async (req, res) =>{
    const { music, title, authors, icon } = req.body
    const musica = "./music/"+music
    const icone = "./icon/"+icon+".png"

    const add = await model.create({
        music:musica,
        title:title,
        authors:authors,
        icon: icone
    })

    res.send(add)
})
router.get('/playlist', async (req, res) => {
    const musicas = await model.findAll()
    res.send(musicas)
})
router.get('/teste', async (req, res) => {
    res.send({opa:"fala meu bom"})
})






module.exports = (app) => app.use('/playlists', router)