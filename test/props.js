import Test from 'ava';
import Is from '../lib/is';
import Errors from '../lib/errors';
import Props from '../lib/props';

const isError = key => err =>
    err.name === Errors[key].name && err.message.indexOf(Errors[key].message) === 0;

Test('should be a function', test => test.true(Is.function(Props)));

const testError = (test, throws, fn) =>
    test[throws ? 'throws' : 'notThrows'](fn, throws || undefined);
testError.title = (type, throws) =>
    `should ${!throws ? 'not ' : ''}throw if ${type} given.`;
const subject = { a: 1 };
const isSubjectErr = isError('subject');
const isDefMapErr = isError('defmap');
[
    ['no arguments', isSubjectErr, () => Props()],
    ['empty subject object', isSubjectErr, () => Props({})],
    ['non-object subject', isSubjectErr, () => Props('test')],
    ['only a valid subject', isDefMapErr, () => Props(subject)],
    ['valid subject and empty defmap', isDefMapErr, () => Props(subject, {})],
    ['valid subject and non-object defmap', isDefMapErr, () => Props(subject, 'test')],
    [
        'valid subject and non-object defmap',
        isError('nodef'),
        () => Props(subject, { b: false }),
    ],
    [
        'valid subject and empty-object defmap',
        isError('nodef'),
        () => Props(subject, { b: {} }),
    ],
    [
        'valid subject and defmap with invalid def.required',
        isError('noreq'),
        () => Props(subject, { a: { required: 'invalid' } }),
    ],
    [
        'valid subject and defmap with invalid def.type',
        isError('notype'),
        () => Props(subject, { a: { type: 'invalid' } }),
    ],
    [
        'valid subject and defmap with invalid def.map',
        isError('nomap'),
        () => Props(subject, { a: { map: 'invalid' } }),
    ],
    [
        'subject with unmatched def.required',
        isError('req'),
        () => Props(subject, { c: { required: true } }),
    ],
    [
        'subject with unmatched def.type',
        isError('type'),
        () => Props(subject, { a: { type: 'string' } }),
    ],

].forEach(([type, throws, fn]) => Test(type, testError, throws, fn));

Test('should resolve the example correctly', (test) => {
    const date = new Date();
    const target = { a: 1, b: 'hello', z: undefined };
    const result = Props(target, {
        a: { type: 'number', required: true },
        b: 'string',
        c: { default: date },
        d: { required: false, default: null, map: value => [value, true] },
    });
    const expected = {
        a: 1, b: 'hello', z: undefined, c: date, d: [null, true],
    };
    test.deepEqual(result, expected);
});
