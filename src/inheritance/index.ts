import {MatchResult} from "../MatchResult";
import MatchReader from "./MatchReader";

const reader = new MatchReader('./data/data.csv')
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