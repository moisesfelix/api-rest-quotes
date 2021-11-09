const jwt = require('jsonwebtoken')
const {getConfig} = require('../configs/config')
const config = getConfig(process.env.NODE_ENV)


module.exports = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            if (token) {
                const decodedToken = jwt.verify(token, config.SECRET)
                console.log({decodedToken})
                req.userData = decodedToken
                next()
            }
            else {
                handleError(null, next)
            }
        }
        else {
            handleError(null, next)
        }
    }
    catch (error) {
        handleError(error, next)
    }
}

function handleError(error, next) {
    if (error) {
        error.message = 'Auth Failed!!!'
        next(error)
    }
    else {
        const error = new Error()
        error.message = 'Auth Failed!!'
        next(error)
    }
}