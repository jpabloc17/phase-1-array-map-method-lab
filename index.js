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
  const capArray = tutorials.map(function (title){
    const splitArray = title.split(" ");
    const capLetter = splitArray.map(function (word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    return capLetter.join(" ");
  })
  return capArray;
}

// const interact = tutorials.map(function (title){
//     const splitArray = title.split(" ");
//     return splitArray;
//     const newWords = splitArray.map(function (word){
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     return newWords.join(" ");
// })

// const capitalizin = interact.map(function (word){
//   const capWord = []
//   for (let i = 0;i < word.length;i++){
//     capWord.push(word[i][0].toUpperCase() + word[i].slice(1));}
//   return capWord.join(" ");
// })

// const interact = tutorials.map(function (title){
//   const splitArray = title.split(" ");
//   const capWords = splitArray.map(function (word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   })
//   return capWords.join(" ");
// })