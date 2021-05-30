"use strict";
/**
 * subclass of abstract class CsvFileReaderTs knows how structured exact .csv file
 * helper function with a reference to fs.map() converts row data to appropriate type
 */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
var utils_1 = require("../utils");
var matchReader = /** @class */ (function (_super) {
  __extends(matchReader, _super);
  function matchReader() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  matchReader.prototype.mapRow = function (row) {
    return [
      utils_1.dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5],
      row[6],
    ];
  };
  return matchReader;
})(CsvFileReader_1.default);
exports.default = matchReader;
