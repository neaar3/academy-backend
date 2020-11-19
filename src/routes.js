const Router = require('koa-router');
const router = new Router(); 
const Auth = require('./controllers/auth');
const Session = require('./middlewares/session');
const Clientes = require('./controllers/clientes');
const Usuarios = require('./controllers/usuarios')

router.post("/auth", Auth.autenticar)
router.post("/usuarios", Usuarios.criarUsuario);
router.get("/usuarios", Usuarios.todosOsUsuarios);
router.post("/clientes", Session.verify, Clientes.criarCliente)
router.get("/clientes", Session.verify, Clientes.todosOsClientes);


module.exports = router;
