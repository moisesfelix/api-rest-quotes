const Quote = require('../models/quote')
const mongoose = require('mongoose')
const QuoteResources = require('../resources/quote')

module.exports = Object.freeze({

  async getByInput1(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: 'method get' })

  },
  async getByKeyword(req, res) {
    try {
      const { keyword } = req.body
      console.log(req)
      const quote = await Quote.find({ 'quote': { '$regex': "ia" } })
      if (!quote) {
        return res.status(401).json({ err: 'Nao encontrado' })
      } else {
        return res.status(200).json({ quote })
      }

    } catch (err) {
      console.error(err)
      return res.status(500).send(err)
    }
  },
  async createQuote(req, res) {
    try {
      const { id, name } = req.userData
      const { value, error } = QuoteResources.validateQuote(req.body)

      if (error) {
        return res.status(400).json({ error })
      } else {
        const { quote } = value
        const data = {
          author: {
            id,
            name,
          },
          quote,
        }
        const _quote = new Quote(data)
        _quote.save((error, result) => {
          if (error) {
            console.log("🎲", error)
            return res.json({ error })

          } else {
            return res.json({ _quote, result })

          }
        })

      }

    } catch (err) {
      console.error(err)
      return res.status(500).send(err)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params
      const quoteDeleted = await Quote.findByIdAndRemove(id)
      if (!quoteDeleted) {
        return res.status(400).json({ msg: 'Quote not found' })
      }
      return res.status(200).json({ msg: 'Quote deleted', id })
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }

  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { quote } = req.body
      const quoteEdited = await Quote.updateOne({ _id: id },
        {
          $set: { quote }
        })
      if (!quoteEdited) {
        return res.status(400).json({ msg: 'Quote not found' })
      }
      return res.status(200).json({ msg: 'Quote edited' })
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }

  },
  async getAll(req, res) {
    try {
      // console.log(req)

      // const keyword  = req.body.keyword === undefined ? "" : req.body.keyword 
      const keyword = req.query.keyword === undefined ? "" : req.query.keyword
      let query
      const isValidKeyWord = keyword.trim().length ? true : false
      if (isValidKeyWord) {
        //quotes = await Quote.find({'quote': {'$regex': keyword}})
        query = { 'quote': { '$regex': keyword } }
      } else {
        // quotes =   await Quote.find({})
        query = {}
      }
      const quotes = await Quote.find(query)
      if (!quotes) {
        res.status(400).json({ msg: 'Quote not found' })
      }


      return res.status(200).json({ keyword, quotesLength: quotes.length, quotes })
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }

  },
  async getOne(req, res) {
    try {
      const { id } = req.params

      const quote = await Quote.findOne({ _id: id })
      if (!quote) {
        return res.status(401).json({ err: 'Nao encontrado' })
      } else {
        return res.status(200).json({ quote })
      }

    } catch (err) {
      console.error(err)
      return res.status(500).send(err)
    }
  },
})
