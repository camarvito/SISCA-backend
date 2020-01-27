const users = [{
    id: 1,
    name: "Victor Camargo Oliveira",
    cpf: "475.801.448-59",
    phone: "(11) 97606-4572",
    type: "Aluno",
    registry: "471419",
    course: "Ciência da Computação",
    debits: [ { id: "1" }, { id: "4" }]
}, {
    id: 2,
    name: "Ana Julia Sampaio",
    cpf: "087.570.214-69",
    phone: "(88) 94412-6454",
    type: "Aluno",
    registry: "485151",
    course: "Design Digital",
    debits: [ { id: "2" }, { id: "5" }]
}, {
    id: 3,
    name: "Leonardo Moura Leitão",
    cpf: "383.755.198-17",
    phone: "(85) 98172-8462",
    type: "Servidor",
    debits: [ { id: "3" }]
}]

const debits = [{
    id: 1,
    user_id: 1,
    name: 'Coxinha',
    price: 3.00,
    date: 'Jan, 23, 2020'
}, {
    id: 2,
    user_id: 2,
    name: 'Tapioca',
    price: 3.50,
    date: 'Jan, 21, 2020'
}, {
    id: 3,
    user_id: 3,
    name: 'Chocolate',
    price: 1.50,
    date: 'Jan, 20, 2020'
}, {
    id: 4,
    user_id: 1,
    name: 'Mini-pizza',
    price: 3.00,
    date: 'Jan, 23, 2020'
}, {
    id: 5,
    user_id: 5,
    name: 'Coca-cola',
    price: 4.00,
    date: 'Jan, 22, 2020'
}]

module.exports = { users, debits }