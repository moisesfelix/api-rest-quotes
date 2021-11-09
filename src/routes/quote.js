const express = require('express')
const router = express.Router()
const checkAuth = require('../middlewares/check-auth')

const QuoteController = require('../controllers/quote')

router.post('/', checkAuth, QuoteController.createQuote)

router.get('/:id', QuoteController.getOne)
router.get('/', QuoteController.getAll)

router.get('/keyword', QuoteController.getByKeyword)

router.delete('/:id', checkAuth, QuoteController.delete)

router.patch('/:id', checkAuth, QuoteController.update)

module.exports = router