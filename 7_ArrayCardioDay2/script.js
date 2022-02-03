const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ]
// some method
  const currentYear = 2022;
  const someMethod = people.some(function greterThan19(person) {
    return (currentYear-person.year) >= 19;
  });



// every method
const everyMethod = people.every(function olderthan19(person){
  return person.year >= 19;
})


// find method
const findMethod  = comments.find(function findByID(comment) {
  return comment.id === 823423;
})



// findIndex method
const findIndexMethod = comments.findIndex( function findByID(comment) {
  return comment.id === 823423;
})

console.log(findIndexMethod);