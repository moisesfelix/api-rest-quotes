const jwt = require('jsonwebtoken')
const { getConfig } = require('../configs/config')
const config = getConfig(process.env.NODE_ENV)

module.exports = {
  issue(payload, expiresIn) {
  
    return jwt.sign(payload, config.SECRET, {
      expiresIn
    })
  }
}

