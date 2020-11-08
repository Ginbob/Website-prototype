import Router = require('@koa/router');
import {getIndexHtml} from "./html";
export const router = new Router();


router.get('/',async (ctx) => {
        ctx.body = getIndexHtml();
});