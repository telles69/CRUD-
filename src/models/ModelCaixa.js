import { sequelize } from "../config";
import {DataTypes} from "sequelize";
import ModelVendinha2 from "./ModelVendinha2";

const ModelCaixa = sequelize.define(
    "caixa",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        pagamentos: {
            type: DataTypes.BOOLEAN,
        }
        
    },
    {
        freezeTableName: true,
        timestamps: false
    }

);

ModelCaixa.belongsTo(ModelVendinha2, {
    as: "idVendinha22",
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    foreignKey: {
        name:'idVendinha2',
        field:'id_vendinha2',
        allowNull: false,
    }
})

export default ModelCaixa;