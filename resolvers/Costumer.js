// Cala a passarada ao seus tristes queixumes, e reflete o mar toda a sua riqueza, suave a luz da lua desperta agora, a cruel saudade que ri e que chora!
const Debits = require('../models/debits')

module.exports = {
    async debits(costumer) {
        const costumerDebits = []
        const currentDebits = await Debits.find()

        if (!costumer.debits) {
            return null
        } else {
            for ({ id } of costumer.debits)
                for (debit of currentDebits) 
                    if (debit.id == id) costumerDebits.push(debit)
            
            return costumerDebits
        }
   }
}