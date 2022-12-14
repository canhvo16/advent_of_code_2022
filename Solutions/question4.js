const fs = require('fs')
const text = fs.readFileSync('Inputs/input4.txt').toString('utf-8')
const textByLine = text.split('\n')

const findFullyOverlappedPairs = (pairs) => {
  let counter = 0
  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i]) {
      let first = pairs[i].split(',')[0]
      let second = pairs[i].split(',')[1]
      let lowerFirst = parseInt(first.split('-')[0])
      let upperFirst = parseInt(first.split('-')[1])
      let lowerSecond = parseInt(second.split('-')[0])
      let upperSecond = parseInt(second.split('-')[1])
      if (lowerFirst >= lowerSecond && upperFirst <= upperSecond) {
        counter++
      } else if (lowerFirst <= lowerSecond && upperFirst >= upperSecond) {
        counter++
      }
    }
  }
  console.log(counter)
}

findFullyOverlappedPairs(textByLine)

/*
have a counter var
iterate through data
  split data by elf
  determine lower and upper section of range from each elf
  compare if one of the other ranges are within each other
    add 1 to counter if they do
return counter
*/
