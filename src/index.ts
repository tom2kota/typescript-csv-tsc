import fs from "fs"

const matches = fs.readFileSync('./data/data.csv', {
    encoding: 'utf-8'
})

console.log('CSV DATA:')
console.log(matches)