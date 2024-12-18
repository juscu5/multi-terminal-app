const { initClients } = require("./clients");
const { initMallhookups } = require("./mall-hookup");
const { initPosNetwork } = require("./pos-network");
const { initPosfile } = require("./posfile");
const { initZreading } = require("./zreading");

const router = require("express").Router();

const initRoutes = (app) => {

    router.use('/clients', initClients());
    router.use('/pos-network', initPosNetwork());
    router.use('/zreading', initZreading());
    router.use('/mallhookups', initMallhookups());
    router.use('/posfile', initPosfile());


    app.post("/api/ping", (req,res) => {
        res.status(200).json({status: 200, message: 'Server exists!'})
    });

    app.use("/api", router);
}
module.exports = {
    initRoutes
}