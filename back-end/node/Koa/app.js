const Koa = require('koa');
const koaParser = require('koa-bodyparser');
const Router = require('./controller');

const authorization = require('./interceptor/authorization');

const app = new Koa();

app.use(koaParser());

app.use(authorization.checkTokenResult);
app.use(authorization.checkToken().unless({
    path: [/^\/login/]
}));

app.use(Router.routes(), Router.allowedMethods());

app.listen(3000);

