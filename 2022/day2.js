import {readFileSync} from 'fs';

const pointsForChoice = {
    'A': 1, 
    'B': 2, 
    'C': 3,
    'X': 1,
    'Y': 2, 
    'Z': 3
};

const pickForResult = {
    'A X': 'C',
    'A Y': 'A',
    'A Z': 'B',
    'B X': 'A',
    'B Y': 'B',
    'B Z': 'C',
    'C X': 'B',
    'C Y': 'C',
    'C Z': 'A'
}

const pointsForResult = {
    'lose': 0,
    'draw': 3,
    'win': 6
}

const strategyOutcomes = {
    'A X': 'draw',
    'A Y': 'win',
    'A Z': 'lose',
    'B X': 'lose',
    'B Y': 'draw',
    'B Z': 'win',
    'C X': 'win',
    'C Y': 'lose',
    'C Z': 'draw'
}

const strategyOutcomesForKnownResult = {
    'A X': 'lose',
    'A Y': 'draw',
    'A Z': 'win',
    'B X': 'lose',
    'B Y': 'draw',
    'B Z': 'win',
    'C X': 'lose',
    'C Y': 'draw',
    'C Z': 'win'
}

const getScoreForGame = (game) => pointsForResult[strategyOutcomes[game]] + pointsForChoice[game.split(' ')[1]];

const getScoreForGameWithKnownResult = (game) => pointsForResult[strategyOutcomesForKnownResult[game]] 
                                                        + pointsForChoice[pickForResult[game]];

const strategiesInput = readFileSync("2022/day2.txt", 'utf-8')
                            .split(/\r?\n/);

const strategyScoreTotal = strategiesInput
                            .map(getScoreForGame)
                            .reduce((partialSum, currentElement) => partialSum + currentElement, 0);

const strategyScoreTotalWithKnownResult = strategiesInput
    .map(getScoreForGameWithKnownResult)
    .reduce((partialSum, currentElement) => partialSum + currentElement, 0);

// console.log(strategyScoreTotal);
 console.log(strategyScoreTotalWithKnownResult);

console.log(getScoreForGameWithKnownResult('A Y'));
console.log(getScoreForGameWithKnownResult('B X'));
console.log(getScoreForGameWithKnownResult('C Z'));