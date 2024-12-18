

const {models} = require('../database');
const { createPosNetwork, checkIsConnected, getIp, deleteNetworkByIP } = require('../services/pos-network');
const router = require("express").Router()

const initPosNetwork = () => {

    router.post('/get-ip', async (req,res) => {
        try {
            const ip = await getIp();
            console.log("Request IP",req.ip, req.ips);
            res.status(200).json({ipaddress: ip});
        } catch (error) {
            res.status(400).json({status: 400, message: error.message})
        }
    });

    router.post('/is-connected', async (req,res) => {

        try {
            const client = await checkIsConnected(req);
            res.status(200).json(client);
        } catch (error) {
            res.status(400).json({status: 400, message: error.message})
        }
    });

    router.post('/connect', async (req,res) => {

        try {
            await createPosNetwork(req);
            res.status(200).json({status: 200,message: "Created POS Network", payload: {}});
        } catch (error) {
            console.log(error);
            res.status(200).json({status: 201, message: error.message})
        }

    });

    router.delete('/', async (req,res) => {
        
        try {
            await deleteNetworkByIP(req);
            res.status(200).json({status: 200,message: "Successfully deleted POS Network", payload: {}});
        } catch (error) {
            console.log(error);
            res.status(200).json({status: 201, message: error.message})
        }
    });

    return router;
}

module.exports= {
    initPosNetwork
}