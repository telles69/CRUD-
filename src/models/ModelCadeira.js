import { sequelize } from "../config";
import {DataTypes} from "sequelize";
import ModelSala from "./ModelSalas";

const ModelCadeira = sequelize.define(
    "cadeira",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        acessibilidade: {
            type: DataTypes.BOOLEAN,
        }
        
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

ModelCadeira.belongsTo(ModelSala, {
    as: "idSala2",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idSala',
        field:'id_salas',
        allowNull: false,
    }
})
export default ModelCadeira;