const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { initRoutes } = require("./routes");

const environment = process.argv[2] || "dev";
const config = require(`./config/config.${environment}.json`);

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

const app = express();
const port = process.env.PORT || "8085";

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(express.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

async function init() {
    initRoutes(app);

    app.listen(port);
    console.log(`Running at http://${config.db.host}:${port}/api`);
}

init();