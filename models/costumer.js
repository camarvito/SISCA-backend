const mongo = require('mongoose')
const Schema = mongo.Schema

const costumerSchema = new Schema({
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    type: { type: String, required: true },
    registry: { type: String, required: false, unique: true, sparse: true },
    course: { type: String, required: false },
    debits: { type: Array, required: true },
})

module.exports = mongo.model('Costumer', costumerSchema, 'costumers')