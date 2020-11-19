const {response} = require('../utils/response');
const Usuarios = require('../repositories/usuarios')
const Senha = require('../utils/senha');

const criarUsuario = async (ctx) => {

    const {nome = null, email = null, senha = null} = ctx.request.body;
    if(!nome || !email || !senha) {
        return response(ctx, 400, 'Favor preencher todos os dados')
    }
    const senhaEncriptada = await Senha.encrypt(senha);
    const result = await Usuarios.criarNovoUsuario(email, senhaEncriptada, nome);

    return response(ctx, 201, {id: `${result.id}`})
}

const todosOsUsuarios = async (ctx) => {
    
    const result = await Usuarios.buscarUsuarios();
    return response(ctx, 200, result)
}

module.exports = { todosOsUsuarios, criarUsuario };