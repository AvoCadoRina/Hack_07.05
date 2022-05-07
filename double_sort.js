const persons = [
    { name: "Ivan", priority: "0", date: new Date('2019-01-22') },
    { name: "Ilya", priority: "0", date: new Date('2022-05-23') },
    { name: "Mark", priority: "1", date: new Date('2022-01-05') },
    { name: "Lidia",priority: "1", date: new Date('2022-05-22') },
]
const sorted = persons.sort(function (a, b) {   
    return a.priority - b.priority || a.date - b.date;
});
console.log(sorted);