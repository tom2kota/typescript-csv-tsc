"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var MatchReader_1 = __importDefault(require("./MatchReader"));
var csvFileReader = new CsvFileReader_1.default("./data/data.csv");
var matchReader = new MatchReader_1.default(csvFileReader);
matchReader.load();
var arsenalWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
  var match = _a[_i];
  if (
    match[1] === "Arsenal" &&
    match[5] === MatchResult_1.MatchResult.HomeWin
  ) {
    arsenalWins++;
  } else if (
    match[2] === "Arsenal" &&
    match[5] === MatchResult_1.MatchResult.AwayWin
  ) {
    arsenalWins++;
  }
}
console.log("Arsenal wins: " + arsenalWins + " times");
