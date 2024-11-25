import { sequelize } from "../config";
import {DataTypes} from "sequelize";


const ModelCliente = sequelize.define(
    "clientes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        cpf: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default ModelCliente;
