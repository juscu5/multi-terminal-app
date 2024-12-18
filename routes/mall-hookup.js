

const {models} = require('../database');
const { uploadMallHookupDataBulk } = require('../services/mall-hookup');
const router = require("express").Router()

const initMallhookups = () => {

    router.get('/mallhookup-data', async (req,res) => {

        res.status(200).json({Sample: 'SampleJson'})

    })

    router.post('/mallhookup-data', async(req,res) => {

        await uploadMallHookupDataBulk([]);

    });
    

    return router;

}


module.exports= {
    initMallhookups
}