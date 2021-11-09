const config = {
    production: {
      SECRET: process.env.SECRET,
      MONGO_URI: process.env.MONGO_URI,
      PORT: process.env.PORT,
      NODE_ENV: process.env.NODE_ENV,

    },
    development: {
      SECRET: 'I_AME_GERER',
      MONGO_URI: 'mongodb://localhost:27017/segunda',
      PORT: 4000,
      NODE_ENV:'development'
    }
  }
  
  exports.getConfig = env => config[env] || config.development