import { sequelize } from "../config";
import {DataTypes} from "sequelize";
import ModelCliente from "./ModelCliente";
import ModelVendinha from "./ModelVendinha";
import ModelFuncionario from "./ModelFuncionarios";

const ModelVendinha2 = sequelize.define(
    "Vendinha2",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        pedidos: {
            type: DataTypes.INTEGER,
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

ModelVendinha2.belongsTo(ModelCliente, {
    as: "idCliente2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idCliente',
        field:'id_clientes',
        allowNull: false,
    }
})
ModelVendinha2.belongsTo(ModelVendinha, {
    as: "idVendinha2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idVendinha',
        field:'id_vendinha',
        allowNull: false,
    }
})
ModelVendinha2.belongsTo(ModelFuncionario, {
    as: "idFuncionario2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idFuncionario',
        field:'id_funcionarios',
        allowNull: false,
    }
})
export default ModelVendinha2;