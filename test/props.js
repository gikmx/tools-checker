import Test from 'ava';
import Is from '../lib/is';
import Types from '../lib/types';
import Props from '../lib/props';

Test('should be a function', test => test.true(Is.function(Props)));

{
    const subject = { a: 1 };
    [
        ['no arguments', [], [Types.CheckerPropParamError]],
        ['empty subject object', [{}], [Types.CheckerPropParamError, /subject/]],
        ['non-object subject', ['test'], [Types.CheckerPropParamError, /subject/]],
        ['only a valid subject', [subject], [Types.CheckerPropParamError, /defmap/]],
        [
            'valid subject and empty defmap',
            [subject, {}],
            [Types.CheckerPropParamError, /defmap/],
        ],
        [
            'valid subject and non-object defmap',
            [subject, 'test'],
            [Types.CheckerPropParamError, /defmap/],
        ],
        [
            'valid subject and empty-object defmap',
            [subject, { b: {} }],
            [Types.CheckerPropDefError, /Invalid def «b»/],
        ],
        [
            'valid subject and non-valid object defmap',
            [subject, { b: false }],
            [Types.CheckerPropDefError, /Invalid def «b»/],
        ],
        [
            'valid subject and defmap with invalid def.required',
            [subject, { a: { required: 'invalid' } }],
            [Types.CheckerPropDefError, /Invalid def «a.required»/],
        ],
        [
            'valid subject and defmap with invalid def.map',
            [subject, { a: { map: 'invalid' } }],
            [Types.CheckerPropDefError, /function/],
        ],
        [
            'valid subject and defmap with invalid def.type',
            [subject, { a: { type: 'invalid' } }],
            [Types.CheckerPropDefTypeError],
        ],
        [
            'subject with unmatched def.required',
            [subject, { c: { required: true } }],
            [Types.CheckerPropReqError],
        ],
        [
            'subject with unmatched def.type',
            [subject, { a: { type: 'string' } }],
            [Types.CheckerPropTypeError],
        ],
    ].forEach(([type, args, [error, regex]]) => {
        const fn = (thrown) => {
            const eq = thrown.name === error.name;
            if (eq && !regex) return true;
            if (eq && (regex && thrown.message.match(regex))) return true;
            return false;
        };
        Test(`should throw if ${type} given.`, t => t.throws(() => Props(...args), fn));
    });
}

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
