const { ipv4Converter } = require("../utilities/string-helper");
const {models} = require('../database');

const postPosfile = async (req) => {

    console.log(req.body);
    try {

        // Removed the recid
        const updatedBody = req.body.map(({recid, ...rest}) => rest);

        await models.posfile.bulkCreate(updatedBody);

    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    postPosfile
}