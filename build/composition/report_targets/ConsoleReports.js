"use strict";
/**
 * Takes the report generated during analysis & send it to that target
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReports = void 0;
var ConsoleReports = /** @class */ (function () {
  function ConsoleReports() {}
  ConsoleReports.prototype.print = function (report) {
    console.log(report);
  };
  return ConsoleReports;
})();
exports.ConsoleReports = ConsoleReports;
