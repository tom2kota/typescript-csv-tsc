"use strict";
/**
 * Takes the report generated during analysis & send it to that target
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
var ConsoleReport = /** @class */ (function () {
  function ConsoleReport() {}
  ConsoleReport.prototype.print = function (report) {
    console.log(report);
  };
  return ConsoleReport;
})();
exports.ConsoleReport = ConsoleReport;
