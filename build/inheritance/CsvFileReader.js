"use strict";
/**
 * You can use this class for opening of .csv files
 * abstract class - never going to use to create an instance of an object (new CsvFileReader())
 * use abstract methods:
 * - read(): void
 * - mapRow(row: string[]): MatchData
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) { return row.split(','); })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.default = CsvFileReader;
