

const {models} = require('../database');
const { postPosfile } = require('../services/posfile');
const router = require("express").Router()

const initPosfile = () => {

    router.post('/', async (req,res) => {

        try {
            const insertPosfile = await postPosfile(req);

            console.log(insertPosfile);

            res.status(200).json({status: 'Posfiles successfully inserted', code: 200})

        } catch (error) {
            console.log("Error");

            res.status(400).json({status: 'Error.', code: 400});
        }
    })
    

    return router;

}


module.exports= {
    initPosfile
}