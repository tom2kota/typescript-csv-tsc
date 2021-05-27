/**
 * subclass of abstract class CsvFileReader knows how structured exact .csv file
 * helper function with a reference to fs.map() converts row data to appropriate type
 */

import CsvFileReader from "./CsvFileReader";
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";

// Type Guard with Tuple type for Type parser - saves exact order of array datastructures
type  MatchData = [Date, string, string, number, number, MatchResult, string]

export default class matchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // type assertion - override TS behaviour
            row[6]
        ]
    }
}