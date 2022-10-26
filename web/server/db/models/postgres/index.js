'use strict';
import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import config from "../../config/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { DATABASE } = config;
const basename = path.basename(__filename);
const db = {};

import DataTypes from "sequelize/lib/data-types";

// eslint-disable-next-line
DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options); // eslint-disable-line
  return date.format("YYYY-MM-DD HH:mm:ss.SSS");
};

const sequelize = new Sequelize(
  DATABASE.DATABASE,
  DATABASE.USERNAME,
  DATABASE.PASSWORD,
  {
    host: DATABASE.HOST,
    dialect: DATABASE.DIALECT,
    logging: DATABASE.LOGGING || console.log,
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(async (file) => {
    const modelPath = `./${file}`;

    const modelFunc = await import(modelPath);
    const model = modelFunc.default(sequelize, Sequelize);


    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
