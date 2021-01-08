# API REST - NODEJS, EXPRESS & MONGODB

## Requerimentos para uso:
- NodeJs
- Express
- Mongoose 
- NPM ou Yarn

##Descrição dos requerimentos:
- Express: para tratar rotas;
- Mongoose: para conexão com o MongoDB(Banco de Dados);
- Npm/Yard: são os gerenciadores de pacotes;

## Rodando:

```
npm install or yard install
```
##Dependências do projeto:
``` 
"keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "debug": "^4.3.1",
    "express": "^4.17.1",
    "http": "0.0.1-security",
    "mongoose": "^5.11.10"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
```
## Model/UserSchema: 
- Nome;
- Email;
- Tel(Telefone);

## Exemplo - JSON:
```
{
  "nome": "Davi",
  "email": "davi@gmail.com",
  "tel:": "981012182"
}
```

## Endpoints/Rotas:
- /users - GET (Encontrar os dados);
- /users - POST (Criar os dados);
- /users/:id - PUT (Editar os dados);
- /users/:id - DELETE (Deletar os dados);
