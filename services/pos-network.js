

const {models} = require('../database');
const { ipv4Converter } = require('../utilities/string-helper');
const { getLocalIP } = require('../utilities/system');
const createPosNetwork = async (req) => {

    const ipAddress= ipv4Converter(req.ip);
    const finalIpAddress = ipAddress==="::1" && getLocalIP() || ipAddress;
    
    const findIpClient = await models.clients.findOne({where: {ipaddress: finalIpAddress}});

    if(findIpClient)
        throw new Error("Your POS already exist in the Main Server");


    await models.clients.create({...req.body, ipaddress: finalIpAddress});
}

const checkIsConnected = async (req) => {

    const ipaddress= ipv4Converter(req.ip);

    return await models.clients.findOne({where: {ipaddress}});

}

const getIp = async () => {
    
    const ipAddress= getLocalIP();

    return ipAddress
} 

const deleteNetworkByIP = async (req) => {

    const ipaddress= ipv4Converter(req.ip);
    console.log('IP Address tbd', ipaddress);
    
    return await models.clients.destroy({where: {ipaddress}});

}

module.exports = {
    createPosNetwork,
    checkIsConnected,
    getIp,
    deleteNetworkByIP
}