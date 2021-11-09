const Author = require('../models/author')
const AuthorResources = require('../resources/author')
const jwt = require('../helpers/jwt')

module.exports = {

    async  delete (req, res) {
      try {
       const { id } = req.params
       const authorDeleted  =   await Author.findByIdAndRemove(id)
        if (!authorDeleted){
          return res.status(400).json({msg: 'Author not found'})
        } 
          return res.status(200).json({msg: 'Author deleted', id})
      } catch (error) {
       console.error(error)
       return res.status(500).send(error)
      }
    
    },
    async  update (req, res) {
   try {
    const { id } = req.params
    const { lastName } = req.body
    const authorEdited  =   await Author.updateOne({ _id: id },
      {
        $set: { lastName }
      })
     if (!authorEdited){
       return res.status(400).json({msg: 'Author not found'})
     } 
       return res.status(200).json({msg: 'Author deleted'})
   } catch (error) {
    console.error(error)
    return res.status(500).send(error)
   }
 
    },
    async  getAll (req, res) {
        try {
         
         const authors =   await Author.find({})
          if (!authors){
            res.status(400).json({msg: 'Author not found'})
          }
          const response = {
                  count: authors.length,
                  authors: authors.map(author => {
                      return {
                          _id: author._id,
              name: author.firstName,
              orders:[
                { id:'ofhdo', date:'20/02/2020'},
                { id:'ofhdo', date:'20/02/2020'},
                { id:'ofhdo', date:'20/02/2020'}
                 ],
              clicks:[
                {
                  id:'oggiifgi',
                  clicks:{
                    date:'20/02/2020',
                    idClicks:[{id:'kdifd', quanty:5},{id:'kdifd', quanty:5},{id:'kdifd', quanty:5},{id:'kdifd', quanty:5}]
                  }
                }
              ]
                }
          
          
          }) }
  
          return res.status(200).json(authors)
        } catch (error) {
         console.error(error)
         return res.status(500).send(error)
        }
      
      },    
    async  getAll (req, res) {
        try {
         
         const authors =   await Author.find({})
          if (!authors){
            res.status(400).json({msg: 'Author not found'})
          }
       
  
          return res.status(200).json(authors)
        } catch (error) {
         console.error(error)
         return res.status(500).send(error)
        }
      
      },
    }
