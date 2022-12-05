import {readFileSync} from 'fs';

const caloriesInput = readFileSync("day1.txt", 'utf-8')
                            .split(/\r?\n/);
var firstCalorieForOnePersonIndex = 0;
var maxAmountOfCalories = -Infinity;
var totalAmountOfCalories = [];
caloriesInput.forEach((element, index) => {
    if (element === ''){
        const caloriesPerPerson = caloriesInput
                                    .slice(firstCalorieForOnePersonIndex, index)
                                    .map(x => parseInt(x));
        firstCalorieForOnePersonIndex = index + 1;
        const sumOfCaloriesPerPerson = caloriesPerPerson.reduce((partialSum, currentElement) => partialSum + currentElement, 0);
        totalAmountOfCalories.push(sumOfCaloriesPerPerson);
        if (sumOfCaloriesPerPerson > maxAmountOfCalories){
            maxAmountOfCalories = sumOfCaloriesPerPerson;
        }
    }
});

totalAmountOfCalories.sort((a, b) => b - a);

console.log(maxAmountOfCalories);
console.log(totalAmountOfCalories[0] + totalAmountOfCalories[1] + totalAmountOfCalories[2]);
