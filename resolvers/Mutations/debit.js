const Debit = require('../../models/debits')
const Costumer = require('../../models/costumer')

module.exports = {
    async newDebit(_, { data }) {
        let newDebitData = {...data}

        const newDebit = new Debit(newDebitData)

        let debitIdRef = { id: `${newDebit.id}` }

        Costumer.findByIdAndUpdate(
            newDebit.costumerId, 
            { $push: { debits: debitIdRef } },
            { new: true }, (err, doc) => {
                if (err) console.log(err)
            })
        
    await newDebit.save()

        return newDebit
    },
    async deleteDebit(_, { filter }){
        const debitId = filter.id

        const deletedDebit = await Debit.findByIdAndDelete(debitId)

        return deletedDebit
    }
}