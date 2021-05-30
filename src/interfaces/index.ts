import { MatchResult } from "../MatchResult";
import CsvFileReader from "./CsvFileReader";
import MatchReader from "./MatchReader";

const csvFileReader = new CsvFileReader("./data/data.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let arsenalWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Arsenal" && match[5] === MatchResult.HomeWin) {
    arsenalWins++;
  } else if (match[2] === "Arsenal" && match[5] === MatchResult.AwayWin) {
    arsenalWins++;
  }
}

console.log(`Arsenal wins: ${arsenalWins} times`);
