import { sequelize } from "../config";
import {DataTypes} from "sequelize";
import ModelFilme from "./ModelFilme";

const ModelCartazes = sequelize.define(
    "cartazes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        descricao: {
            type: DataTypes.TEXT,
        },
        genero: {
            type: DataTypes.TEXT,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

ModelCartazes.belongsTo(ModelFilme, {
    as: "idfilme2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idFilme',
        field:'id_filmes',
        allowNull: false,
    }
})