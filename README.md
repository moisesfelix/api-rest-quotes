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
