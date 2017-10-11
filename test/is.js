import Test from 'ava';
import { Is, PRIMITIVES, METHODS } from '../lib/is.js';

const primitives = Object.keys(PRIMITIVES);
const methods = Object.keys(METHODS);

Test('is: should be an object', test => test.is(Is.constructor, Object));

/**
 * All members of 'is', should be functions.
 */
const isFunction = (test, prop) => test.is(Is[prop].constructor, Function);
isFunction.title = type => `is.${type}: should be a function`;
[].concat(primitives, methods).forEach(name => Test(name, isFunction, name));

/**
 * Validate that primitive are validated correctly.
 */
const isValue = (test, key, result, value) => test.is(Is[key](value), result);
isValue.title = (type, key, result) => `is.${key}: should return ${result} when ${type}`;
[
    ['non-number', 'number', '1', false],
]
    .concat(primitives
        .filter(key => key !== 'number')
        .map(key => [`non-${key}`, key, 1, false]),
    )
    .concat(primitives
        .map(key => ({ key, Val: PRIMITIVES[key] }))
        .reduce((acc, { key, Val }) => acc.concat([
            [`statically constructed ${key}`, key, Val(), true],
            [`${key} instance`, key, new Val(), true],
        ]), []),
    )
    .forEach(([type, key, value, result]) => Test(type, isValue, key, result, value));

/**
 * Make sure empty objects are validated correctly.
 */
const objectEmpty = (test, value, result) => test.is(Is.objectEmpty(value), result);
objectEmpty.title = (type, value, result) =>
    `is.objectEmpty: should return ${result} when sent ${type}`;
/* eslint-disable no-new-object, no-new-wrappers */
[
    ['empty literal object', {}, true],
    ['object instance', new Object(), true],
    ['non-empty literal object', { a: 1 }, false],
    ['non-empty object instance', new Object(true), false],
    ['empty primitive instance', new String(), false],
    ['non-empty primitive instance', new String('hello'), false],
].forEach(([type, value, result]) => Test(type, objectEmpty, value, result));
/* eslint-enable no-new-object, no-new-wrappers */
