import config from "../config/index.js";

const DATABASE = config.DATABASE;
const dbCfg = {
  database: DATABASE.DATABASE,
  username: DATABASE.USERNAME,
  password: DATABASE.PASSWORD,
  host: DATABASE.HOST,
  dialect: DATABASE.DIALECT,
};


console.log(dbCfg, DATABASE, config);

export default {...dbCfg};
