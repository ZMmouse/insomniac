const Koa = require('koa');

const authorization = require('./interceptor/authorization');

const app = new Koa();
app.use(authorization.checkTokenResult);
app.use(authorization.checkToken()).unless({
    path: [/^\/login/]
});

app.listen(3000);

