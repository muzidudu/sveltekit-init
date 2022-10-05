import { handler } from './build/handler.js';
import express from 'express';

const app = express();
app.use(handler);
app.listen(5001, () => {
	console.log('listening on port 5001');
});
