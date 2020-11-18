const database = require("../utils/database");

const criarTabelaDeUsuarios = async () => {
    const criarTabela = `CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL,
        email VARCHAR(40),
        senha VARCHAR(25),
        nome TEXT
    );`

    return database.query(criarTabela);
};

const criarNovoUsuario = async (email, senha, nome) => {
    const criarUsuario = {text:`INSERT INTO usuarios (email, senha, nome) VALUES ($1, $2, $3);`,
        values:[email, senha, nome]
    };

    return database.query(criarUsuario).rows;
};

const buscarUsuarios = async (email) => {
    const buscarUsuariosNaTabela = `SELECT * FROM usuarios WHERE email = ${email};`

    const result = await database.query(buscarUsuariosNaTabela);
    
    return result.rows.shift();
};

module.exports = {criarTabelaDeUsuarios, criarNovoUsuario, buscarUsuarios}