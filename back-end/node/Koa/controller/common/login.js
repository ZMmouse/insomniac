const {router, jsonWebToken} = require('../../config/plug');
const {secret} = require('../../config/secret');

router.post('/login', async (ctx) => {
    const {username, password} = ctx.request.body;
    if (username === 'admin' && password === 1) {
        ctx.body = {
            code: 200,
            msg: '登录成功',
            token: jsonWebToken.sign(
                { name: 'admin', id: '1' },
                secret,
                { expiresIn: '1h' }
            )
        }
    } else {
        ctx.body = {
            code: 200,
            msg: '登录失败，用户名或密码错误'
        }
    }
});

module.exports = router;
