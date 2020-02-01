const costumers = [{
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
}, {
    id: 4,
    name: "Jessica Oliveira",
    cpf: "745.851.265-12",
    phone: "(11) 99411-2253",
    type: "Aluno",
    registry: "415523",
    course: "Engenharia de Software",
    debits: []
}, {
    id: 5,
    name: "Joesley Mendonça Filho",
    cpf: "441.265.321-74",
    phone: "(85) 95412-2354",
    type: "Aluno",
    registry: "415523",
    course: "Engenharia da Computação",
    debits: [ { id: "6" }, { id: "7" }, { id: "8" }, { id: "9" }]
}]

const debits = [{
    id: 1,
    costumer_id: 1,
    name: 'Coxinha',
    price: 3.00,
    date: 'Jan, 23, 2020'
}, {
    id: 2,
    costumer_id: 2,
    name: 'Tapioca',
    price: 3.50,
    date: 'Jan, 21, 2020'
}, {
    id: 3,
    costumer_id: 3,
    name: 'Chocolate',
    price: 1.50,
    date: 'Jan, 20, 2020'
}, {
    id: 4,
    costumer_id: 1,
    name: 'Mini-pizza',
    price: 3.00,
    date: 'Jan, 23, 2020'
}, {
    id: 5,
    costumer_id: 2,
    name: 'Coca-cola',
    price: 4.00,
    date: 'Jan, 22, 2020'
}, {
    id: 6,
    costumer_id: 5,
    name: 'Refrigerante Laranja',
    price: 5.00,
    date: 'Jan, 24, 2020'
}, {
    id: 7,
    costumer_id: 5,
    name: 'Salgado de Frango',
    price: 2.40,
    date: 'Jan, 28, 2020'
}, {
    id: 8,
    costumer_id: 5,
    name: 'Tapioca sem recheio',
    price: 1.00,
    date: 'Jan, 29, 2020'
}, {
    id: 9,
    costumer_id: 5,
    name: 'Bolo de chocolate',
    price: 1.20,
    date: 'Jan, 30, 2020'
}]

module.exports = { costumers, debits }