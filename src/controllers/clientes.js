const {response} = require('../utils/response');
const Clientes = require('../repositories/clientes')

const todosOsClientes = async (ctx) => {
    const result = await Clientes.listarClientes();
    return response(ctx, 200, result)
}

module.exports = { todosOsClientes };