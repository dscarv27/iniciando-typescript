import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(routes);

// function getUsername(): string{
//     return 'dscarv27'
// }

// const username = getUsername() //inferência de tipos, não é necessário declarar que, nesse caso, é uma string

app.listen(3333);