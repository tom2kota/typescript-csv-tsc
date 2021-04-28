import fs from "fs"

const matches = fs
    .readFileSync('./data/data.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map(
        (row: string): string[] => row.split(',')
    )

console.log('CSV DATA:')
console.log(matches)
console.log(typeof matches)