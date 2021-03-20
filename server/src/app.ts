import express, { Application, Request, Response, NextFunction } from 'express';

const app: express.Application = express();

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => console.log(`sever started on port ${PORT}`));

app.get('/', (req: Request, res: Response) => {
    console.log(req);
    console.log(res);
});
