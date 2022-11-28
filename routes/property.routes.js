import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let data = [
    {
        code: "",
        title: "",
        description: "",
        type: "",
        transaction: "",
        state: "",
        city: "",
        neighborhood: "",
        address: "",
        area: 0,
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        amenities: {
          swimming: false,
          concierge: false,
          gourmet: false,
          parking: false,
        },
        photos: [],
      }
];

// ROTAS
// Método GET
// add.get('/', (request, response) => {
router.get('/', (request, response) => {
    // No json a gente tem a resposta que a gente quer obter
    // Sempre retornamos algo (uma resposta)
    // return response.json(data);
    // Posso definir o status
    return response.status(200).json(data);
});

// Método POST
// add.post('/create', (request, response) => {
router.post('/create', (request, response) => {
    const newData = {
        // Captura o body da requisição e adiciona um id.
        id: uuidv4(),
        ...request.body
        
    }
    // Mostra no terminal do VSCode
    // console.log(request);
    
    data.push(newData);
    return response.status(201).json(data);
})

// Método PUT
// add.put('/edit/:id', (request, response) => {
router.put('/edit/:id', (request, response) => {
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

// Método DELETE
// app.delete('/delete/:id', (request, response) => {
router.delete('/delete/:id', (request, response) => {
    const { id } = request.params;

    const deleteById = data.find(
        item => item.id === id
    );

    const index = data.indexOf(deleteById);

    data.splice(index, 1);

    return response.status(200).json(data);
})

export default router;