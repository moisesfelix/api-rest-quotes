const http = require('http')
const app = require('./src/app')

const server = http.createServer(app)
const {getConfig} = require('./src/configs/config')
const config = getConfig(process.env.NODE_ENV)

const PORT = config.PORT
const NODE_ENV = config.NODE_ENV

server.listen(PORT, () =>
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`)
)

