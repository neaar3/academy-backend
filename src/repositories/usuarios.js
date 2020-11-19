const database = require("../utils/database");

const criarNovoUsuario = async (email, senha, nome) => {
    const criarUsuario = {text:`INSERT INTO usuarios (email, senha, nome) VALUES ($1, $2, $3);`,
        values:[email, senha, nome]
    };
    const result = await database.query(criarUsuario);
    const validarUsuario = `SELECT * FROM usuarios WHERE email = '${email}';`
    const result2 = await database.query(validarUsuario);
    return result2.rows.shift();
};

const buscarUsuariosPorEmail = async (email) => {
    const buscarUsuariosNaTabela = `SELECT * FROM usuarios WHERE email = '${email}';`

    const result = await database.query(buscarUsuariosNaTabela);
    return result.rows.shift();
};

const buscarUsuarios = async () => {
    const buscarUsuariosNaTabela = `SELECT * FROM usuarios;`

    const result = await database.query(buscarUsuariosNaTabela);
    
    return result.rows;
};

module.exports = {criarNovoUsuario, buscarUsuarios, buscarUsuariosPorEmail}