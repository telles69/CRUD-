import ModelSessao from '../models/ModelSessao';

const get = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        let response = []
        response = await ModelSessao.findOne({
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

        return res.status(200).send(response);
    } catch (e) {
        return res.status(500).send({
            error: e.message
        })
    }
}

export default {
    get
}