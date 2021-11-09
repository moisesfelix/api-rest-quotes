const mongoose = require('mongoose')
const {getConfig} = require('./config')
const config = getConfig(process.env.NODE_ENV)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
    //  useCreateIndex: true,
    //  useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected from config: ${conn.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB
