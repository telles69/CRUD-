import { where } from 'sequelize';
import ModelCliente from '../models/ModelCliente';
import { response } from 'express';
import jwt from 'jsonwebtoken';
import encrypt from './Crypto';
const crypto = require('crypto');
import decrypt from './DesCrypto';

const get = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        let response = []
        response = await ModelCliente.findOne({
            where: {
                id: id
            }
        });
        if (!response){
            response = await ModelCliente.findAll();
        }
        return res.status(200).send(response);
    } catch (e) {
        return res.status(500).send({
            error: e.message
        })
    }
};

const destroy = async (req,res) => {
try {
    const{
        id
    } = req.params;
    let response = []
    response = await ModelCliente.findOne({
        where: {
            id: id
        }
    });
    if (!response) {
        return res.status(500).send({
            type: 'error',
            message: 'Nao foi encontrado'
        })
    }
return res.status(200).send('A linha foi deletada')
} catch (e) {
    return res.status(500).send({
        error: e.message
    })
}
};
const update = async (req, res) => {
    try {
        const{
            id
        } = req.params;
        let response = [];
        response = await ModelCliente.findOne({
            where:{
                id: id
            }
        });
        if (!response) {
            return res.status(500).send({
                type: 'error',
                message: 'Nao foi encontrado'
            })
        };
        Object.keys(req.body).forEach((a) => response[a] = req.body[a]);
        await response.save();
        return res.status(200).send({message: 'A linha foi alterada',
                                    data: response
        })
    } catch (error) {
        
    }
}
const criar = async(req, res) =>{
    try {
        const{
            id,
            cpf,
            senha,
            role
        } = req.body;
    const response = await ModelCliente.create({
        id,
        cpf,
        senha : encrypt(senha),
        role
    });
    return res.status(200).send({
        message: 'O cliente foi criado',
        data: response
    })
    } catch (error) {
        return res.status(500).send({
            message: 'Erro ao tentar criar o cliente'
        })
    }
}

const login = async (req, res) => {
    try {
        const{
            cpf,
            senha
        } = req.body;
        let response = await ModelCliente.findOne({
            where:{ 
                cpf
            }
        }); 
    if(!response){
        return res.status(200).send({
            message: 'Usuario nao encontrado'
        })
    }
        if(senha !== decrypt(response.senha)){
            return res.status(200).send({
                message: 'Senha incorreta'
            })
    }

    const token = jwt.sign({UserId: response.id, cpf: response.cpf, role: response.role}, process.env.TOKEN_KEY, {expiresIn: 300})
        return res.json({
            auth: true,
            token
        });
    
    } catch (error) {
        return res.status(500).send({
            message: 'Erro ao tentar fazer login',
            data: error.message
        });
    }
}

export default {
    get,
    destroy,
    update,
    criar,
    login
} 