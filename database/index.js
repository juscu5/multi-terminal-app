const { Sequelize } = require("sequelize");
const relationDefiners = require('./relations')

const environment = process.argv[2] || "dev";

const config = require(`../config/config.${environment}.json`);
const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    },
    timezone: "+08:00",
    logging: false
});

const modelDefiners = [
  require('../models/clients'),
  require('../models/sequence'),
  require('../models/posfile'),
  require('../models/pos-userfile'),
  require('../models/item'),
  require('../models/itemclassfile'),
  require('../models/dinetype'),
  require('../models/zreadingfile'),
  require('../models/syspar'),
  require('../models/headerfile')
]


for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

const relations = relationDefiners(sequelize);

for (const relationDefiner of relations){
  relationDefiner();
}

const syncDatabase = async () => {
  try {
    await sequelize.sync();
    console.log('Database Synced');
  } catch (error) {
    console.log('Error syncing database', error);
  }
}


syncDatabase();
module.exports = sequelize;