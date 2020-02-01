const Costumer = require('../../models/costumer')

module.exports = {
    async newCostumer(_, { data }){

        const newCostumerData = {
            ...data,
            debits: []
        }
    
        const newCostumer = new Costumer(newCostumerData)
        await newCostumer.save()
        return newCostumer
    },
    async deleteCostumer(_, { filter }){
        const costumerId = filter.id

        const deletedCostumer = await Costumer.findByIdAndDelete(costumerId)
        return deletedCostumer
    },
    async changeCostumer(_, { filter, data }){
        const costumerId = filter.id
        const changedCostumer = await Costumer.findByIdAndUpdate(costumerId, data, (err, doc) => {
            if (err) return err
        })
        return changedCostumer
    }
}