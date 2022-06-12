# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install danielawale/lotide`

**Require it:**

`const _ = require('danielawale/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: finds the head of an array
- `tail(...)`: gets the array minus the head
- `middle(...)`: finds the middle elements of an array
- `eqArrays(...)`: see if two arrays are equal
- `eqObjects(...)`: see if two objects are equal
- `assertEqual(...)`: see if two values are matching
- `asserArraysEqual(...)`: see if two values in an array are matching
- `assertObjectEqual(...)`: see if two values in an object are matching
- `countLetters(...)`: counts the letters in a string
- `countOnly(...)`: counts in an array
- `findKey(...)`: finds the key in an object
- `findKeyByValue(...)`: finds key by finding the value
- `letterPositions(...)`: finds the position of the letters
- `without(...)`: description
- `map(...)`: map method of an array
- `takeUntil(...)`: description
