/* globals test,expect */
import Is from '../lib/is';
import Types from '../lib/types';
import Props from '../lib/props';

test('should be a function', () =>
    expect(Is.function(Props)).toBe(true),
);

{
    const subject = { a: 1 };
    [
        ['no arguments', [], [Types.PropParamError]],
        ['empty subject object', [{}], [Types.PropParamError, /subject/]],
        ['non-object subject', ['test'], [Types.PropParamError, /subject/]],
        ['only a valid subject', [subject], [Types.PropParamError, /defmap/]],
        [
            'valid subject and empty defmap',
            [subject, {}],
            [Types.PropParamError, /defmap/],
        ],
        [
            'valid subject and non-object defmap',
            [subject, 'test'],
            [Types.PropParamError, /defmap/],
        ],
        [
            'valid subject and empty-object defmap',
            [subject, { b: {} }],
            [Types.PropDefError, /Invalid def «b»/],
        ],
        [
            'valid subject and non-valid object defmap',
            [subject, { b: false }],
            [Types.PropDefError, /Invalid def «b»/],
        ],
        [
            'valid subject and defmap with invalid def.required',
            [subject, { a: { required: 'invalid' } }],
            [Types.PropDefError, /Invalid def «a.required»/],
        ],
        [
            'valid subject and defmap with invalid def.map',
            [subject, { a: { map: 'invalid' } }],
            [Types.PropDefError, /function/],
        ],
        [
            'valid subject and defmap with invalid def.type',
            [subject, { a: { type: 'invalid' } }],
            [Types.PropDefTypeError],
        ],
        [
            'subject with unmatched def.required',
            [subject, { c: { required: true } }],
            [Types.PropReqError],
        ],
        [
            'subject with unmatched def.type',
            [subject, { a: { type: 'string' } }],
            [Types.PropTypeError],
        ],
    ].forEach(([type, args, [error, regex]]) => {
        expect.assertions(1);
        const fn = (thrown) => {
            const eq = thrown.name === error.name;
            if (eq && !regex) return true;
            if (eq && (regex && thrown.message.match(regex))) return true;
            return false;
        };
        test(`should throw if ${type} given.`, () => {
            try {
                Props(...args);
            } catch (thrown) {
                expect(fn(thrown)).toBe(true);
            }
        });
    });
}

test('should resolve the example correctly', () => {
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
    expect(result).toEqual(expected);
});
