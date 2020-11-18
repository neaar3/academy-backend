const jwt = require("jsonwebtoken")
const {response} = require('../utils/response')
require('dotenv').config();

const verify = async (ctx, next)  => {
    const [bearer, token] = ctx.headers.authorization.split(' ');
    try {
        const verification = await jwt.verify(token, process.env.JWT_SECRET)
        ctx.state.email = verification.email  
    } catch (err) {
        return response(ctx, 403, 'Ação proibida')
    }
    
    return next()
}
module.exports = {verify}