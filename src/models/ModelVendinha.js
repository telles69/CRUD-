import { sequelize } from "../config";
import {DataTypes} from "sequelize";


const ModelVendinha = sequelize.define(
    "Vendinha",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        pipoca: {
            type: DataTypes.INTEGER,
        },
        chocolate: {
            type: DataTypes.INTEGER,
        },
        refrigerante: {
            type: DataTypes.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

export default ModelVendinha;