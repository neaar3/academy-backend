const {response} = require('../utils/response');
const Usuarios = require('../repositories/usuarios')
const Senha = require('../utils/senha');
const jwt = require("jsonwebtoken")

require('dotenv').config();


const autenticar = async (ctx) => {
    const {email = null, senha = null} = ctx.request.body;
    if(!email || !senha) {
        return response(ctx, 400, {mensagem: 'Pedido mal formatado'})
    }
    const usuarios = await Usuarios.buscarUsuariosPorEmail(email);

    if(usuarios) {
        const compare = await Senha.check(senha, usuarios.senha)
        if (compare) {
            const token = jwt.sign({email: usuarios.email}, process.env.JWT_SECRET || 'cubos', {expiresIn: '1h'})
            return response(ctx, 200, {'mensagem': 'Usuário logado com sucesso!', 'token': `${token}`})
        }
        
    }
    return response(ctx, 200, {mensagem: 'email ou senha incorretos'})
    

} 
module.exports = {autenticar}