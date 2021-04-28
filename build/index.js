"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var MatchResult_1 = require("./MatchResult");
var matchesData = fs_1.default
    .readFileSync('./data/data.csv', {
    encoding: 'utf-8'
})
    .split('\n')
    .map(function (row) { return row.split(','); });
var arsenalWins = 0;
for (var _i = 0, matchesData_1 = matchesData; _i < matchesData_1.length; _i++) {
    var match = matchesData_1[_i];
    if (match[1] === 'Arsenal' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        arsenalWins++;
    }
    else if (match[2] === 'Arsenal' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        arsenalWins++;
    }
}
console.log("Arsenal wins: " + arsenalWins + " times");
