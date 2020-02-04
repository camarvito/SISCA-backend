const mongo = require('mongoose')
const Schema = mongo.Schema

const debitSchema = new Schema({
    costumerId: mongo.Schema.Types.ObjectId,
    name: String,
    price: Number,
    date: Date,
    isPaid: Boolean
})

module.exports = mongo.model('Debit', debitSchema, 'debits')