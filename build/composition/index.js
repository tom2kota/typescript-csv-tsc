"use strict";
/**
 * Enter one of existing constants for team from './data/data.csv
 */
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var teamTitle = "Arsenal";
// const teamTitle = "No Name Team";
var fileName = "./data/data.csv";
var matchReader = MatchReader_1.MatchReader.fromCsv(fileName);
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport(teamTitle);
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
// // before code refactoring:
// const csvFileReader = new CsvFileReader("./data/data.csv");
// const matchReader = new MatchReader(csvFileReader);
//
// const  summary = new Summary(
//     new WinsAnalysis(teamTitle),
//     new ConsoleReport()
//     // new  HtmlReport()
// )
