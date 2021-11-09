const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      test:{
        type: Object
      },
      isAdmin: {
        type: Boolean,
        default: false
      }/*,
      location: {
        type: PointSchema,
        index: '2dsphere'
      }*/
      },
      {
        timestamps: {},
      })

module.exports = mongoose.model('User', UserSchema)