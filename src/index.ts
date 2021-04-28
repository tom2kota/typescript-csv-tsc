import {MatchResult} from "./MatchResult";
import CsvFileReader from "./CsvFileReader";

const reader = new CsvFileReader('./data/data.csv')
reader.read() // to open .csv file, read info, assign it to data property

let arsenalWins = 0

for (let match of reader.data) {
    if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
        arsenalWins++
    } else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
        arsenalWins++
    }
}

console.log(`Arsenal wins: ${arsenalWins} times`)