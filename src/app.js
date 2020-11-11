const Koa = require('koa');
const Router = require('@koa/router');
const path = require('path');
const dotenv = require('dotenv');
const serve = require('koa-static');
const json = require('koa-json');
const render = require('koa-ejs');

const resolvedPath = path.resolve(__dirname, '../config/' + process.env.NODE_ENV + '.env');
dotenv.config({path: resolvedPath});

const secret = process.env.SECRET;
if (!secret) {
    throw new Error("no secret set");
}

const app = new Koa();
app.use(json());
app.use(serve(__dirname + '/ressources'));

const router = require('./appController').router;

render(app, {
    root: path.join(__dirname, '/ressources/html'),
    layout: 'layout',
    viewExt: 'html',
    cache: true,
    debug: false
});

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;