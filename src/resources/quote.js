const Joi = require('joi')
const bcrypt = require('bcryptjs')

module.exports =  {
 
  validateQuote(body) {
    
    const schema = Joi.object(
      {
      author: {
        id: Joi.string().required(),
        name: Joi.string().required(),

      },
      quote: Joi.string()
      .min(30)
      .max(140).required(),
    })

    const { value, error } = schema.validate(body)
    
    if (error && error.details) {
      return { error }
    }
    return { value }
  }
      
}