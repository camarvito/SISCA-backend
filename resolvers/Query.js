const Costumer = require('../models/costumer')
const Debits = require('../models/debits')
// const { costumers, debits } = require('../data/db')

module.exports = {
    costumers(){
        return Costumer.find()
    },
    costumer(_, { filter }) {
        if(!filter) return null
        const { id } = filter // Implementar outros meios de busca
        if (id) {
            return Costumer.findById(id)
        } else {
            return null
        }
    },
    debits(){
        return Debits.find()
    },
    debit(_, { filter }){
        if(!filter) return null
        const { id } = filter
        if (id) {
            return Debits.findById(id)
        } else {
            return null
        }
    }
}