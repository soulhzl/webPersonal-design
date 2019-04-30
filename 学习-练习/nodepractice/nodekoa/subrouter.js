const router = require('koa-router')();

router.get('/', async (ctx, next) => {
	ctx.body = "kakaak";
}).get('/test1', async (ctx) => {
	ctx.body = "test11111111111111111111111111";
}).get('/test2', async (ctx, next) => {
	ctx.body = "test22222222222222222222222222";
});

module.exports = router;