import { sequelize } from "../config";
import {DataTypes} from "sequelize";
import ModelCliente from "./ModelCliente";

const ModelFuncionario = sequelize.define(
    "funcionarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        funcao: {
            type: DataTypes.TEXT,
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

ModelFuncionarios.belongsTo(ModelCliente, {
    as: "idCliente2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idCliente',
        field:'id_clientes',
        allowNull: true,
    }
})
export default ModelFuncionario;