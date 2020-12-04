const scrapeLarsProfile = require("./instagram/instagramService").scrapeLarsProfile;

const Router = require('@koa/router');
const router = new Router();

router.get('/',async (ctx) => {
        const instaPosts = await scrapeLarsProfile();
        await ctx.render('index', {
                title: "Lars Alt - Aktuelles",
                instagramPosts: instaPosts
        });
});

module.exports.router = router;