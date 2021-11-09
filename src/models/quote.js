const mongoose = require('mongoose')
const QuoteSchema = new mongoose.Schema(
    {
        author: {
            id:{
                type: String,
                required: true
            },
            name:{
                type: String,
                required: true
            }
        },
        quote: {
            type: String,
            required: true
        }   
    },
    {
        timestamps: {},
    }
      
)

 
module.exports = mongoose.model('Quote', QuoteSchema)