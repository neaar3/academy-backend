const {response} = require('../utils/response');
const Clientes = require('../repositories/clientes');
const Auth = require('./auth');


const criarCliente = async (ctx) => {

    const {nome = null, cpf = null, email = null, telefone = null, id = null} = ctx.request.body;

    if(!nome || !cpf || !email || !telefone || !id) {
        return response(ctx, 400, 'Favor preencher todos os dados')
    }
    const result = await Clientes.criarNovoCliente(nome, cpf, email, telefone, id);
    return response(ctx, 201, {id: `${result.id}`})
    
}


const todosOsClientes = async (ctx) => {
    const result = await Clientes.listarClientes();
    return response(ctx, 200, result)
}

module.exports = { todosOsClientes, criarCliente };