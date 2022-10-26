"use strict";
import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class ModelName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /**
       *  define association here Like This
       * 
       * ModelName.belongsTo(models.Preferences, {
       *   foreignKey: { name: "storeId", allowNull: true },
       *   onDelete: "CASCADE",
       * })
       */
    }
  }
  ModelName.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      storeId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "store",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      // columName: {
      //   type: DataTypes.TEXT,
      //   get: function () {
      //     return JSON.parse(this.getDataValue("columName"));
      //   },
      //   set: function (val) {
      //     return this.setDataValue("columName", JSON.stringify(val));
      //   },
      // },
    },
    {
      sequelize,
      modelName: "ModelName",
      tableName: "ModelName",
    }
  );
  return ModelName;
};
