import { sequelize } from "../config";
import {DataTypes} from "sequelize";
import ModelSala from "./ModelSalas";
import ModelFilme from "./ModelFilme";

const ModelSessao = sequelize.define(
    "sessao",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        dataInicio: {
            field : 'data_inicio',
            type: DataTypes.DATE
        },
    },
    {
        freezeTableName: true,
        timestamps: false 
        
    }

);

ModelSessao.belongsTo(ModelSala, {
    as: "idSala2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idSala',
        field:'id_salas',
        allowNull: false,
    }
})
ModelSessao.belongsTo(ModelFilme, {
    as: "idFilme2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idFilme',
        field:'id_filmes',
        allowNull: false,
    }
})

export default ModelSessao;