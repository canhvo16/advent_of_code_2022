const { readFileSync, promises: fsPromises } = require('fs')

const fs = require('fs')
const text = fs.readFileSync('./input1.txt').toString('utf-8')
const textByLine = text.split('\n')

const findMostCalories = (foodList) => {
  let maxElfCalories = 0
  let currentElfCalories = 0
  for (let i = 0; i < foodList.length; i++) {
    let calorie = parseInt(foodList[i])
    if (i == foodList.length - 1) {
      maxElfCalories = Math.max(maxElfCalories, currentElfCalories)
      console.log(maxElfCalories)
    }
    if (foodList[i] == '') {
      maxElfCalories = Math.max(maxElfCalories, currentElfCalories)
      currentElfCalories = 0
    } else {
      currentElfCalories += calorie
    }
  }
}

findMostCalories(textByLine)
