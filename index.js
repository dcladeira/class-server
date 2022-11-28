// Servidor com NODE

// import { createServer } from 'http';

// const server = createServer((request, response) => {
//     console.log("Hello World");
//     response.end();
// });
// server.listen(8080, () => console.log('server listening on port 8080'));

// Servidor com EXPRESS
import express, { response } from 'express';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();
const app = express();
app.use(express.json());

let data = [
    {
        name: "Ana",
        department: "TI"
    }
];

// ROTAS
app.get('/', (request, response) => {
    // No json a gente tem a resposta que a gente quer obter
    // Sempre retornamos algo (uma resposta)
    // return response.json(data);
    // Posso definir o status
    return response.status(200).json(data);
})

app.post('/create', (request, response) => {
    const newData = {
        // Captura o body da requisição e adiciona um id.
        ...request.body,
        id: uuidv4()
    }
    // Mostra no terminal do VSCode
    // console.log(request);
    
    data.push(newData);
    return response.status(201).json(data);
})

// MÉTODO PUT
app.put('/edit/:id', (request, response) => {
    const { id } = request.params;

    const update = data.find(
        item => item.id === id
    );

    const index = data.indexOf(update);
    
    // atualiza o item existente
    data[index] = {
        ...update,
        ...request.body
    };

    return response.status(200).json(data[index]);
})

app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;

    const deleteById = data.find(
        item => item.id === id
    );

    const index = data.indexOf(deleteById);

    data.splice(index, 1);

    return response.status(200).json(data);
})

app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'));
