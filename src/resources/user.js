const Joi = require('joi')
const bcrypt = require('bcryptjs')

module.exports =  {
  encryptPassword(palinText) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(palinText, salt)
  },
  comparePassword(plainText, encrypedPassword) {
    return bcrypt.compareSync(plainText, encrypedPassword)
  }, 
  validateSignup(body) {
    
    const schema = Joi.object(
      {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    })

    const { value, error } = schema.validate(body)
    
    if (error && error.details) {
      return { error }
    }
    return { value }
  },
  validateLogin(body) {
    const schema = Joi.object(
      {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    })
    const { value, error } = schema.validate(body)
    if (error && error.details) {
      return { error }
    }
    return { value }
  },
  validate (operation, body){
      switch (operation) {
          case 'signup':
         var validate = {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
          }       
              break;
          case 'login':
       var validate =  {
      email: Joi.string().email().required(),
      password: Joi.string().required()
          }
          break;
      }
      const schema = Joi.object(validate)
      const { value, error } = schema.validate(body)    
          if (error && error.details) {
            return { error }
          }
          return { value }
  }
      
}