"use strict";
/**
 * Summary (like coordinator of sorts) has references to other objects,
 * but has no responsibility for doing anything
 * strong composition pattern
 * Chose report type in class Summary:
 *     - return new Summary(new WinsAnalysis(team), new HtmlReport());
 *     - return new Summary(new WinsAnalysis(team), new ConsoleReport());
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./report_targets/HtmlReport");
var Summary = /** @class */ (function () {
  function Summary(analyzer, outputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }
  Summary.winsAnalysisWithHtmlReport = function (team) {
    return new Summary(
      new WinsAnalysis_1.WinsAnalysis(team),
      new HtmlReport_1.HtmlReport()
    );
    // return new Summary(new WinsAnalysis(team), new ConsoleReport());
  };
  Summary.prototype.buildAndPrintReport = function (matches) {
    var output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  };
  return Summary;
})();
exports.Summary = Summary;
