import Koa = require('koa');
import {router} from "./app/appController";
const path = require('path');
const dotenv = require('dotenv');
const serve = require('koa-static');

const resolvedPath = path.resolve(__dirname, '../config/' + process.env.NODE_ENV + '.env');
dotenv.config({path: resolvedPath});

const secret = process.env.SECRET;
if (!secret) {
    throw new Error("no secret set");
}

const app = new Koa();

app.use(serve(__dirname + '/ressources/images'));
app.use(serve(__dirname + '/ressources/video'));

app.use(router.routes())
    .use(router.allowedMethods())


module.exports = app;