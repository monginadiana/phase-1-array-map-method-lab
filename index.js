const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newArr = []

  let items = tutorials.map(tutorial=>{
      // console.log(tutorial);
      // console.log(tutorial.split(' '))
      let newItem = tutorial.split(' ').map(item1=>{
        // console.log (item1)
        return item1.charAt(0).toUpperCase() + item1.slice(1)
      
      })
      let newItem1 = newItem.join(' ')
      // console.log(newItem1)
      newArr.push(newItem1)

  })
  return newArr
  
}
titleCased()


