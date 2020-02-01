const Debit = require('../../models/debits')
const Costumer = require('../../models/costumer')

module.exports = {
    newDebit(_, { data }) {
        let newDebitData = {...data}

        const newDebit = new Debit(newDebitData)

        let debitIdRef = { id: `${newDebit.id}` }

        console.log(debitIdRef)

        Costumer.findByIdAndUpdate(
            newDebit.costumerId, 
            { $push: { debits: debitIdRef } },
            { new: true }, (err, doc) => {
                if (err) console.log(err)
            })
        
        newDebit.save()

        return newDebit
    },
    deleteDebit(_, { filter }){
        const i = debitIndex(filter)
        if(i < 0) return null
        const excludes = 
            debits.splice(i, 1)
        return excludes ? 
            excludes[0] : null
    }
}