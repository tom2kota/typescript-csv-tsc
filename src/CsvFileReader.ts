import fs from "fs";
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";

// Type Guard with Tuple type for Type parser
type  MatchData = [Date, string, string, number, number, MatchResult, string]

export default class CsvFileReader {
    constructor(public filename: string) {
    }

    data: MatchData[] = [];

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map(
                (row: string): string[] => row.split(',')
            )
            .map(this.mapRow)
    }

    // helper function
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ]
    }
}