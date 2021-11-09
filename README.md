# api-rest-quotes

## Api Quote [/quote]

### List all Quotes [GET]

List movies in reverse order of publication.

- Response 200 (application/json)
### Create a New Question [POST]

You may create your own question using this action. It takes a JSON object
containing a question and a collection of answers in the form of choices.

- Request (application/json)

  - Body

          {
            "quote": "Apenas uma desmonstração"
          }

  - Schema

          {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
              "quote": {
                "type": "string"
              },
              "choices": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "minItems": 2
              }
            }
          }
          
 # Testando a api
 
 ### Criando um novo usuário
 
| Método | URL | Body| Header | Ação |
| --- | --- | --- | --- | --- |
| POST | http://localhost:1111/users/signup | { "firstName":"Usuário","lastName":"Teste", "email": "usuario.test@admin.com","password": "admin"} | Content-Type: application/json |Cria um novo usuário a partir do JSON enviado na requisição |
| POST | http://localhost:1111/users/login | { "email":"usuario.test@admin.com", "password":"admin" } | Content-Type: application/json |Logar os dados do usário a partir do JSON enviado na requisição e Retorna um token|
| GET | http://localhost:1111/users/{userId} | {} | |Retorna os dados do usuário com o ID passado|
| PATCH | http://localhost:1111/users/{userId} | {"lastName": "Novo sobrenome"} | Content-Type: application/json ,Authorization: Bearer {token} |Editar os dados do usário a partir do JSON enviado na requisição |
| DELETE | http://localhost:1111/users/{userId} | {} | Content-Type: application/json, Authorization: Bearer {token} |Remove os dados do usuário a partir do ID passado | 

 
 ### Criando uma citação
 
| Método | URL | Body| Header | Ação |
| --- | --- | --- | --- | --- |
| POST | http://localhost:1111/quote | { "quote":"Escreva a sua citação com no máximo 140 caractéres"} | Content-Type: application/json, Authorization: Bearer {token} |Cria uma nova citação a partir do JSON enviado na requisição |
| GET | http://localhost:1111/quote/ | {} |  |Retorna todas as citações|
| GET | http://localhost:1111/quote/{quoteId} | {} | |Retorna uma citação com o ID passado|
| GET | http://localhost:1111/quote/?keyword={word} | {} | |Retorna todas citações que contenha a palavra chave enviada|
| PATCH | http://localhost:1111/quote/{quoteId} | {"quote": "Citação atualizada"} | Content-Type: application/json ,Authorization: Bearer {token} |Editar os dados do usário a partir do JSON enviado na requisição |
| DELETE | http://localhost:1111/quote/{quoteId} | {} | Content-Type: application/json, Authorization: Bearer {token} |Remove os dados do usuário a partir do ID passado | 





