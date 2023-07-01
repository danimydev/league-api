import { Application } from 'oak';

const app = new Application();

app.use((ctx) => {
	ctx.response.body = 'hello world';
});

await app.listen({ port: 3000 });
