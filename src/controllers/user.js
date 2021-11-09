const User = require('../models/user')
const UserResources = require('../resources/user')
const jwt = require('../helpers/jwt')

module.exports = Object.freeze({
    async signup(req, res) {
      try {
        const { value, error } = UserResources.validateSignup(req.body)
        
        if (error) {
          return res.status(400).json(error)
        }
        const encryptedPass = UserResources.encryptPassword(value.password)
  
        const user = await User.create({
          email: value.email,
          firstName: value.firstName,
          lastName: value.lastName,
          password: encryptedPass
        })

        return res.json({ success: true })
      } catch (err) {
        console.error(err)
        return res.status(500).send(err)
      }
    },
    async login(req, res) {
      try {
        const { value, error } = UserResources.validateLogin(req.body)
        if (error) {
          return res.status(400).json(error)
        }
        const user = await User.findOne({ email: value.email })
        if (!user) {
          return res.status(401).json({ err: 'unauthorized' })
        }
        const authenticted = UserResources.comparePassword(value.password, user.password)
        if (!authenticted) {
          return res.status(401).json({ err: 'unauthorized' })
        } 
        console.log("😚",user)
        const token = jwt.issue({ id: user._id , name:user.lastName }, '1d')
        return res.json({ token })
      } catch (err) {
        console.error(err)
        return res.status(500).send(err)
      }
    },
    authenticate(req, res) {
      return res.json(req.user)
    },
    index(req, res) {
        return res.status(200).json({msg: 'method get'})

    },
    async  delete (req, res) {
      try {
       const { id } = req.params
       const userDeleted  =   await User.findByIdAndRemove(id)
        if (!userDeleted){
          return res.status(400).json({msg: 'User not found'})
        } 
          return res.status(200).json({msg: 'User deleted', id})
      } catch (error) {
       console.error(error)
       return res.status(500).send(error)
      }
    
    },
    async  update (req, res) {
   try {
    const { id } = req.params
    const { lastName } = req.body
    const userEdited  =   await User.updateOne({ _id: id },
      {
        $set: { lastName }
      })
     if (!userEdited){
       return res.status(400).json({msg: 'User not found'})
     } 
       return res.status(200).json({msg: 'User deleted'})
   } catch (error) {
    console.error(error)
    return res.status(500).send(error)
   }
 
    },
    async  getAll (req, res) {
      try {
       
       const users =   await User.find({})
        if (!users){
          res.status(400).json({msg: 'User not found'})
        }
       return res.status(200).json(users)
      } catch (error) {
       console.error(error)
       return res.status(500).send(error)
      }
    
    },
    })
