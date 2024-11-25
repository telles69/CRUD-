import { sequelize } from "../config";
import {DataTypes} from "sequelize";


const ModelSala = sequelize.define(
    "salas",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default ModelSala;
