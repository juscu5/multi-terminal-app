

const { doneZread, generateZreading, resetZread, isLast } = require('../services/zreading');
const router = require("express").Router()

const initZreading = () => {

    router.post('/done', async (req,res) => {
        try {
            const isZreadDone = await doneZread(req);
            console.log(isZreadDone);
            res.status(200).json({status: 200, message: "The Z-Reading for this unit is now done."});
        } catch (error) {
            res.status(400).json({status: 400, message: error.message})
        }
    });

    router.get('/generate', async(req,res) => {
        try {

            const generatedZRead = await generateZreading(req,res);

            if(generatedZRead == false){
                res.status(400).json({status: 400, message: 'Z-Reading in some terminals are not done.'});
            }
           
        } catch (err) {
            console.error("\n" + err);
            res.status(500).send({err: "Something wents wrong!"});
        }
    });

    router.get('/is-last', async (req,res) => {
        try {

            const lastZread = await isLast();

            if(lastZread == false){
                res.status(400).json({status: 400, message: 'Z-Reading in some terminals are not done.'});
            }else{
                res.status(200).json({status: 200, message: 'Last terminal, need to execute the ZReading Consolidator'});
            }
           
        } catch (err) {
            console.error("\n" + err);
            res.status(500).send({err: "Something wents wrong!"});
        }
    });
    
    return router;
}

module.exports= {
    initZreading
}