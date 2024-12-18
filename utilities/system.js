

const os = require('os');

const getLocalIP = () => {

    const nets = os.networkInterfaces();
    let localIp= '';

    for(const name of Object.keys(nets)){
        for(const net of nets[name]){
            if(net.family === 'IPv4' && !net.internal){
                localIp = net.address;
                break;
            }
        }
    }

    return localIp;


}


module.exports = {
    getLocalIP
};