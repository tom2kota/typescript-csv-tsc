# TypeScript CSV 2 HTML

CSV Dataset to HTML Report converter - TypeScript App

- CSV Dataset => Load => Parse => Analyze => Report
- TypeScript => Type Definition File => JS Library
- TypeScript => Type Definition File => Node JS Standard Library => fs, http, os
- Parse 'string' => ```.split('\n')``` => string[] => ```.map() + .split(',')``` => string[][]

----

### Required

* [Node.js API](https://nodejs.org/api/)
* [TypeScript](https://www.npmjs.com/package/typescript)
* [Download TypeScript](https://www.typescriptlang.org/download)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [fs.readFileSync(path[, options])fs.readFileSync(path[, options])](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)
* [@types/node](https://www.npmjs.com/package/@types/node)
* []()

------

#### Run in terminal

```
npm i
npm run start
npm run build
```

#### Or to start from scratch

```
npm i typescript --save-dev
tsc --init
npx tsc
```

-----------------------

# info

-----------------------

## Interface

* sets up a contract between different classes
* use when you have very different objects that should work together
* promotes loose coupling

## Inheritance / Abstract class

* sets up a contact between different classes (that extends/borrows methods from abstract class)
* use when you are trying to build up a definition of an object
* strongly couples classes together

-----------------------

### Abstract class

1) can't be used to create an object directly
2) only used as a parent class
3) can contain real implementation for some methods
4) the implemented methods can refer to other methods that don't actually exist yet
   (just need to provide names & types for the un-implemented methods)
5) can make child classes promise to implement some other method

### Interface

1) creates a new type, describing the property names & value types of an object
2) name of interface with a capital letter
3) helps to create reusable functions
4) acting as a gatekeeper to some functions / objects must satisfy the interface to work with some functions
5) [generic interface](https://www.typescriptlang.org/docs/handbook/2/generics.html)

-----------------------

# Types

Type annotation (when type 'any', bool | number) / Type inference (TypeScript guess the type)

* ### Primitive types (typeof(5))
    - number
    - string
    - boolean
    - symbol
    - null
    - undefined
    - void (function that returns nothing)
* ### Object types ([] instanceof Object)
    - functions
    - objects (interfaces, Date)
    - classes
    - arrays ([], Tuples => [string, boolean, number])

-----------------------

# [Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

**Enumeration - collections of closely related values**

- follow near-identical syntax rules as normal objects
- creates an object with the sane keys and values when converted from TS to JS
- primary goal is to signal to other engineers that these are all closely related values
- use whenever we have a small fixed set of values that are all closely related and known at compile time

