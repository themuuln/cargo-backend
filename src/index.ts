import { Hono } from 'hono';
import connectToMongo from './db';

const app = new Hono();

const main = () => {
	try {
		app.get('/', (c) => {
			console.log('Hello Honoaa new!');
			return c.text('Hello Honoaaa!');
		});
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	} finally {
		console.log('finally here');
	}
};

connectToMongo();

main();

app.onError((err, c) => {
	console.error(`${err}`);
	return c.text('Custom Error Message', 500);
});

export default {
	port: 8888,
	fetch: app.fetch,
};
