const { users, debits } = require('../data/db')

module.exports = {
    users(){
        return users
    },
    user(_, { id }) {
        const selected = users.filter(u => u.id === id)
        return selected ? selected[0] : null
    },
    debits(){
        return debits
    },
    debit(_, { id }){
        const selected = debits.filter(d => d.id === id)
        return selected ? selected[0] : null
    }
}