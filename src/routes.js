const Router = require('koa-router');
const router = new Router(); 
const Auth = require('./controllers/auth');
const Session = require('./middlewares/session');
const Clientes = require('./controllers/clientes');
const Usuarios = require('./controllers/usuarios')

router.post("/usuarios", Usuarios.criarUsuario);
router.get("/usuarios", Usuarios.todosOsUsuarios);

router.get("/clientes", Clientes.todosOsClientes);


module.exports = router;
