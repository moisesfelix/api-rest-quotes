# api-rest-quotes 📝

          
 # Testando a api 🚀
 
 ### Instalando o projeto

```
git clone https://github.com/moisesfelix/api-rest-quotes.git
```
```
cd api-rest-quotes
```
```
npm i
```
```
nodemon server.js
``` 

 
 ### Criando um novo usuário
 
| Verbos | URL | Body| Header | Ação |
| --- | --- | --- | --- | --- |
| POST | http://localhost:1111/users/signup | { "firstName":"Usuário","lastName":"Teste", "email": "usuario.test@admin.com","password": "admin"} | Content-Type: application/json |Cria um novo usuário a partir do JSON enviado na requisição |
| POST | http://localhost:1111/users/login | { "email":"usuario.test@admin.com", "password":"admin" } | Content-Type: application/json |Logar os dados do usário a partir do JSON enviado na requisição e Retorna um token|
| GET | http://localhost:1111/users/{userId} | {} | |Retorna os dados do usuário com o ID passado|
| PATCH | http://localhost:1111/users/{userId} | {"lastName": "Novo sobrenome"} | Content-Type: application/json ,Authorization: Bearer {token} |Editar os dados do usário a partir do JSON enviado na requisição |
| DELETE | http://localhost:1111/users/{userId} | {} | Content-Type: application/json, Authorization: Bearer {token} |Remove os dados do usuário a partir do ID passado | 

 
 ### Criando uma citação
 
| Verbos | URL | Body| Header | Ação |
| --- | --- | --- | --- | --- |
| POST | http://localhost:1111/quote | { "quote":"Escreva a sua citação com no máximo 140 caractéres"} | Content-Type: application/json, Authorization: Bearer {token} |Cria uma nova citação a partir do JSON enviado na requisição |
| GET | http://localhost:1111/quote/ | {} |  |Retorna todas as citações|
| GET | http://localhost:1111/quote/{quoteId} | {} | |Retorna uma citação com o ID passado|
| GET | http://localhost:1111/quote/?keyword={keyword} | {} | |Retorna todas citações que contenha a palavra chave enviada na Query string (keyword)|
| PATCH | http://localhost:1111/quote/{quoteId} | {"quote": "Citação atualizada"} | Content-Type: application/json ,Authorization: Bearer {token} |Editar os dados do usário a partir do JSON enviado na requisição |
| DELETE | http://localhost:1111/quote/{quoteId} | {} | Content-Type: application/json, Authorization: Bearer {token} |Remove os dados do usuário a partir do ID passado | 




### Recursos utilizados no desenvolvimento:


    - "bcryptjs": "^2.4.3"
    - "body-parser": "^1.19.0"
    - "cors": "^2.8.5"
    - "dotenv-safe": "^8.2.0"
    - "express": "^4.17.1"
    - "joi": "^17.4.2"
    - "jsonwebtoken": "^8.5.1"
    - "mongoose": "^6.0.12"
    - "morgan": "^1.10.0"
    - "nodemon": "^2.0.14"
