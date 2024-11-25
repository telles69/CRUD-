import ModelCliente from "../controllers/ClienteController";
import autenticar from "../Middlewares/autenticar";

export default function (app) {
    app.get('/cliente/get/:id', ModelCliente.get);
    app.delete('/cliente/delete/:id', autenticar, ModelCliente.destroy);
    app.post('/cliente/update/:id', autenticar, ModelCliente.update);
    app.post('/cliente/create',autenticar, ModelCliente.criar);
    app.post('/cliente/login', ModelCliente.login);
} 
