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
          
 #Testando a api
 ###Criando um novo usuário
 
| Método | URL | Açao |
| --- | --- | --- |
| POST | http://localhost:1111/users | Salva os dados do usário a partir do JSON enviado na requisição |
| GET | http://localhost:1111/users/{userId} | Retorna os dados do usuário com o ID passado|
| PATCH | http://localhost:1111/users/{userId} | Editar os dados do usário a partir do JSON enviado na requisição |
| DELETE | http://localhost:1111/users/{userId} | Remove os dados do usuário a partir do ID passado |




