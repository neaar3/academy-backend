const database = require("./database");

const schema = {
    1: `CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        email VARCHAR(40) NOT NULL,
        senha TEXT NOT NULL,
        nome TEXT NOT NULL,
        deletado BOOL DEFAULT FALSE
    );`,
    2: `CREATE TABLE IF NOT EXISTS clientes (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        cpf VARCHAR(14) NOT NULL,
        email VARCHAR(40) NOT NULL,
        telefone VARCHAR(14) NOT NULL,
        idDoUsuario INTEGER NOT NULL
    );`,
    3: `CREATE TABLE IF NOT EXISTS cobrancas (
        id SERIAL PRIMARY KEY,
        valor INTEGER NOT NULL,
        vencimento DATE NOT NULL,
        clienteId INTEGER NOT NULL,
        descricao TEXT NOT NULL,
        linkDoBoleto TEXT NOT NULL,
        codigoDeBarras TEXT NOT NULL,
        dataDePagamento DATE
    );`
};

const apagarTabela = async (nomeTabela) => {
	if (nomeTabela) {
		await database.query(`DROP TABLE ${nomeTabela}`);
		console.log(`Tabela ${nomeTabela} apagada`);
	}
};

const criarTabela = async (numero = null) => {
	if (!numero) {
		for (const value in schema) {
			await database.query({ text: schema[value] });
		}
	} else {
		await database.query({ text: schema[numero] });
	}
	console.log('Migração executada!');
};

criarTabela();
// apagarTabela('usuarios')
// apagarTabela('clientes')
// apagarTabela('cobrancas')