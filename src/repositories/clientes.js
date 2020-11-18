const database = require("../utils/database");

const criarTabelaDeClientes = async () => {
    const criarTabela = `CREATE TABLE IF NOT EXISTS clientes (
        id SERIAL,
        nome TEXT,
        cpf VARCHAR(14),
        email VARCHAR(40),
        tel VARCHAR(14)
    );`

    return database.query(criarTabela);
};

const criarNovoCliente = async (nome, cpf, email, tel) => {
    const criarCliente = `INSERT INTO clientes (nome, cpf, email, tel) 
        VALUES (${nome}, ${cpf}, ${email}, ${tel});`

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

module.exports = {criarTabelaDeClientes, criarNovoCliente, editarCliente, listarClientes}