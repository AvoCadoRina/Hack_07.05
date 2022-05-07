const persons = [
    { name: "Ivan", date: new Date('2019-01-22') },
    { name: "Mark", date: new Date('2022-01-05') },
    { name: "Lidia", date: new Date('2022-05-22') },
]
const sorted = persons.sort((a, b) => b.date - a.date)

console.log(sorted);