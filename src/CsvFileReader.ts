/**
 * You can use this class for opening of .csv files
 * abstract class - never going to use to create an instance of an object (new CsvFileReader())
 * use abstract methods:
 * - read(): void
 * - mapRow(row: string[]): MatchData
 */

import fs from "fs";

export default abstract class CsvFileReader<Type> {
    data: Type[] = [];

    constructor(public filename: string) {
    }

    // helper function with a reference to fs.map() converts row data to appropriate type
    abstract mapRow(row: string[]): Type

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

}