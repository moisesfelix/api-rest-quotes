module.exports = (req, res, next) => {
    try {
        if (req.body.isAdmin) {
            next()
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
        error.message = 'logi !!!'
        next(error)
    }
    else {
        const error = new Error()
        error.message = 'Auth Failed!!'
        next(error)
    }
}