import fs from "fs"
import {MatchResult} from "./MatchResult";

const matchesData = fs
    .readFileSync('./data/data.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map(
        (row: string): string[] => row.split(',')
    )

let arsenalWins = 0

for (let match of matchesData) {
    if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
        arsenalWins++
    } else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
        arsenalWins++
    }
}

console.log(`Arsenal wins: ${arsenalWins} times`)