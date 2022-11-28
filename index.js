// Servidor com NODE

// import { createServer } from 'http';

// const server = createServer((request, response) => {
//     console.log("Hello World");
//     response.end();
// });
// server.listen(8080, () => console.log('server listening on port 8080'));

// Servidor com EXPRESS
import express from 'express';
import * as dotenv from 'dotenv';
import propertyRouter from './routes/property.routes.js'    // colocar o .js
import userRouter from './routes/user.routes.js'

// configuração padrão do dotenv
dotenv.config();

// inicialização do express
const app = express();

// permitir a interpretação do json
app.use(express.json());

app.use('/property', propertyRouter);
app.use('/user', userRouter);
// Dessa forma, a partir de agora, para fazer um get tenho que passar:
// http://localhost:8080/property/

app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'));
