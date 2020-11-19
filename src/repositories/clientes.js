const database = require("../utils/database");

const criarNovoCliente = async (nome, cpf, email, telefone, idDoUsuario) => {
    const criarCliente = `INSERT INTO clientes (nome, cpf, email, telefone, idDoUsuario) 
        VALUES (${nome}, ${cpf}, ${email}, ${telefone}, ${idDoUsuario});`

    return database.query(criarCliente);
}

const editarCliente = async (id, nome, cpf, email) => {
    const editarDadosDoCliente = `UPDATE clientes SET nome = ${nome}, cpf = ${cpf}, email = ${email} 
    WHERE id = ${id} 
    RETURNING *;`
    
    const result = await database.query(editarDadosDoCliente);
    
    return result.rows;
};

const listarClientes = async () => {
    const listarTodosOsClientes = `SELECT * FROM clientes;`;
    const result = await database.query(listarTodosOsClientes);

    return result.rows;
}

module.exports = {criarNovoCliente, editarCliente, listarClientes}