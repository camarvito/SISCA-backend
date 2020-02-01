const costumer = require('./costumer')
const debit = require('./debit')

module.exports = {
    ...costumer,
    ...debit
}