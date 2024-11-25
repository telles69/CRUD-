import ModelSessao from "../controllers/SessaoController";

export default function (app){
    app.get('/sessao/get/:id', ModelSessao.get);
}