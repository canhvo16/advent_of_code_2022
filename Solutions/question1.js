const { readFileSync, promises: fsPromises } = require('fs')

const fs = require('fs')
const text = fs.readFileSync('Inputs/input1.txt').toString('utf-8')
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

const findTop3Calories = (foodList) => {
  let caloriesSum = 0
  let threeElves = [0, 0, 0]
  let currentElf = 0
  for (let i = 0; i < foodList.length; i++) {
    let calorie = parseInt(foodList[i])
    if (i == foodList.length - 1) {
      caloriesSum = threeElves.reduce((partialSum, idx) => partialSum + idx, 0)
      console.log(caloriesSum)
    }
    if (foodList[i] !== '') {
      currentElf = currentElf += calorie
    } else if (foodList[i] == '') {
      if (currentElf > threeElves[2]) {
        threeElves.pop()
        threeElves.push(currentElf)
        currentElf = 0
      }
    }
  }
}

findTop3Calories(textByLine)
