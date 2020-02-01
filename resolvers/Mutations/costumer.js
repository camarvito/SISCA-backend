const Costumer = require('../../models/costumer')

module.exports = {
    newCostumer(_, { data }){

        const newCostumerData = {
            ...data,
            debits: []
        }
    
        const newCostumer = new Costumer(newCostumerData)
        newCostumer.save()
        return newCostumer
    },
    deleteCostumer(_, { filter }){
        // const i = costumerIndex(filter)
        // if (i < 0) return null
        // const excludes = 
        //     costumers.splice(i, 1)
        // return excludes ? 
        //     excludes[0] : null
    },
    changeCostumer(_, { filter, data }){
        // const i = costumerIndex(filter)
        // if (i < 0) return null
        
        // const costumerChanged = {
        //     ...costumers[i],
        //     ...data
        // }

        // costumers.splice(i, 1, costumerChanged)
        // return costumerChanged
    }
}