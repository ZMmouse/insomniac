const {koaJwt} = require('../config/plug');
const {secret} = require('../config/secret');

const checkTokenResult = function (ctx, next) {
    return next().catch(err => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                code: 401,
                msg: err.message,
            }
        } else {
            throw err;
        }
    });
};

const checkToken = function () {
    return koaJwt({secret})
};

module.exports = {
    checkTokenResult,
    checkToken,
};
