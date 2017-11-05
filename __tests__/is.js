/* globals describe,test,expect */
import { Is, PRIMITIVES, METHODS } from '../lib/is.js';

/* eslint-disable */
const primitives = Object.keys(PRIMITIVES);
const methods = Object.keys(METHODS);
/* eslint-enable */

test('is: should be an object', () => expect(Is.constructor).toBe(Object));

describe('is: functions', () => {
    []
        .concat(primitives, methods)
        .forEach(name => test(`is.${name}: should be a function`, () =>
            expect(Is[name].constructor).toEqual(Function),
        ));
});

describe('is: returned values', () => {
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
        .forEach(([type, key, value, result]) => test(
            `is.${key}: should return ${result} when ${type}`,
            () => expect(Is[key](value)).toBe(result),
        ));
});

describe('is: objectEmpty', () => {
    [ /* eslint-disable no-new-object, no-new-wrappers */
        ['empty literal object', {}, true],
        ['object instance', new Object(), true],
        ['non-empty literal object', { a: 1 }, false],
        ['non-empty object instance', new Object(true), false],
        ['empty primitive instance', new String(), false],
        ['non-empty primitive instance', new String('hello'), false],
    ] /* eslint-enable no-new-object, no-new-wrappers */
        .forEach(([type, value, result]) => test(
            `is.objectEmpty: should return ${result} when sent ${type}`,
            () => expect(Is.objectEmpty(value)).toBe(result),
        ));
});
