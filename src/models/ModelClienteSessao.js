import { sequelize } from "../config";
import {DataTypes} from "sequelize";
import ModelCliente from "./ModelCliente";
import ModelCaixa from "./ModelCaixa";
import ModelCadeira from "./ModelCadeira";
import ModelSessao from "./ModelSessao";

const ModelClienteSessao = sequelize.define(
    "cliente_sessao",
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

ModelClienteSessao.belongsTo(ModelCliente, {
    as: "idCliente2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idCliente',
        field:'id_clientes',
        allowNull: false,
    }
})
ModelClienteSessao.belongsTo(ModelCaixa, {
    as: "idCaixa2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idCaixa',
        field:'id_caixa',
        allowNull: false,
    }
})
ModelClienteSessao.belongsTo(ModelCadeira, {
    as: "idCadeira2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idCadeira',
        field:'id_cadeira',
        allowNull: false,
    }
})
ModelClienteSessao.belongsTo(ModelSessao, {
    as: "idSessao2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idSessao',
        field:'id_sessao',
        allowNull: false,
    }
})
export default ModelClienteSessao;