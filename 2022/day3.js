import {readFileSync} from 'fs';

const rucksackInput = readFileSync("2022/day3.txt", 'utf-8')
                            .split(/\r?\n/);


const getItemOnBothSides = (rucksack) => {
    const [firstHalf, secondHalf] = getRucksackHalves(rucksack);
    for(var i=0; i<firstHalf.length; i++) {
        const character = firstHalf.charAt(i);
        if (secondHalf.indexOf(character) != -1) {
            return character;
        }
    };
} 

const getPriorityForItem = (item) =>
    item == item.toLowerCase() 
        ? item.charCodeAt(0) - 96
        : item.charCodeAt(0) - 38;

const getRucksackHalves = (rucksack) => {
    return [rucksack.slice(0, rucksack.length/2), rucksack.slice(rucksack.length/2)]
}

const getSumOfPriorities = rucksackInput =>
    rucksackInput.map(x => getPriorityForItem(getItemOnBothSides(x)))
    .reduce((partialSum, currentElement) => partialSum + currentElement, 0);

console.log(getPriorityForItem(getItemOnBothSides('vJrwpWtwJgWrhcsFMMfFFhFp')));
console.log(getPriorityForItem(getItemOnBothSides('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL')));
console.log(getPriorityForItem(getItemOnBothSides('PmmdzqPrVvPwwTWBwg')));
console.log(getPriorityForItem(getItemOnBothSides('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn')));
console.log(getPriorityForItem(getItemOnBothSides('ttgJtRGJQctTZtZT')));
console.log(getPriorityForItem(getItemOnBothSides('CrZsJsPPZsGzwwsLwLmpwMDw')));

console.log(getSumOfPriorities(rucksackInput));

