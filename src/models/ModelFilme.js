import { sequelize } from "../config";
import {DataTypes} from "sequelize";


const ModelFilme = sequelize.define(
    "filmes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        titulo: {
            type: DataTypes.STRING,
        },
        diretor: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default ModelFilme;