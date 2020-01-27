// Cala a passarada ao seus tristes queixumes, e reflete o mar toda a sua riqueza, suave a luz da lua desperta agora, a cruel saudade que ri e que chora!
const { debits } = require('../data/db')

module.exports = {
    debits(user) {
        let userDebits = []
        for ({ id } of user.debits){
            for (debit of debits) {
                if (debit.id == id){
                    userDebits.push(debit)
                }
            }
        }

       return userDebits ? userDebits : null
   }
}