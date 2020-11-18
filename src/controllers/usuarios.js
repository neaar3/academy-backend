const {response} = require('../utils/response');
const Usuarios = require('../repositories/usuarios')

const criarUsuario = async (ctx) => {
    await Usuarios.criarTabelaDeUsuarios();
    const dados = ctx.request.body;
    const result = await Usuarios.criarNovoUsuario(dados.email, dados.senha, dados.nome);

    return response(ctx, 200, result)
}

const todosOsUsuarios = async (ctx) => {
    
    const result = await Usuarios.buscarUsuarios();
    return response(ctx, 200, result)
}

module.exports = { todosOsUsuarios, criarUsuario };