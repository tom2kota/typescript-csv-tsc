/**
 * Enter one of existing constants for team from './data/data.csv
 */

import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { MatchResult } from "../MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./report_targets/ConsoleReport";
import { HtmlReport } from "./report_targets/HtmlReport";

const teamTitle = "Arsenal";
// const teamTitle = "No Name Team";
const fileName = "./data/data.csv";

const matchReader = MatchReader.fromCsv(fileName);
const summary = Summary.winsAnalysisWithHtmlReport(teamTitle);

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
