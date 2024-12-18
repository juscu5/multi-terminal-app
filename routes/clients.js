

const {models} = require('../database');
const router = require("express").Router()

const initClients = () => {

    console.log("is it working here??");
    router.get('/', async (req,res) => {

        console.log("Does it go inside brother??");
        res.status(200).json({Sample: 'SampleJson'})
        // res.status(200).json({status: 'Success', code: 200, payload: employeeFind});


    })
    

    return router;

}


module.exports= {
    initClients
}