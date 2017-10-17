import Throw from '@gik/tools-thrower';
import Types from './types';
import Is from './is';

/**
 * Validates properties of given object.
 * @memberof Tools.checker
 *
 * @param {Object} subject - The object value whose properties will be inspected.
 * @param {Object} defmap - An definition object map, describing each of the prop' types.
 * @param {Object|string} defmap.prop
 *        The name of a corresponding subject's property.
 *        If a string is used, it will be converted to: `{ type: <string used>, required:true }`
 * @param {string} [defmap.type=any]
 *        Determines the type the prop should have, all methods on `is()` are asupported.
 * @param {bool} [defmap.required=false]
 *        Wether the prop can be omitted.
 * @param {*} [defmap.default=undefined]
 *        The value to use if prop is omitted (cannot be used along `required`).
 * @param {function} [defmap.map=undefined]
 *        A function that will receive subject's prop value and expects you
 *        to return acomputed value for it
 *
 * @returns {Object} The validated subject extended with default values (when applies).
 *
 * @throws {CheckerPropParamError} when invalid parameters are passed.
 * @throws {CheckerPropDefError} when a type definition is invalid.
 * @throws {CheckerPropDefTypeError} when a type defintiion is not supported.
 * @throws {CheckerPropReqError} when a required property is not found.
 * @throws {CheckerPropTypeError} when a property does not match the defintion.
 *
 * @example
 * const subject = { a: 1, b: 'hello' z: undefined };
 * const result = props(subject, {
 *     a: { type:'number', required:true },
 *     b: 'string',
 *     c: { default: new Date() },
 *     d: { required: false, default: null, map: value => [value, true] },
 * })
 * // result:
 * // { a: 1, b: 'hello', c: '1981-06-23 10:06:08', d: [null, true], z: undefined }
 */
export default function props(subject, defmap) {

    // Validate parameters
    [['subject', subject], ['defmap', defmap]].forEach(([key, val]) => {
        const err = Types.CheckerPropParamError;
        if (!Is.object(val) || Is.objectEmpty(val))
            Throw([err.message, key, 'Object', typeof val], err.name);
    });

    return Object
        .keys(defmap)
        .map(name => ({ name, def: defmap[name], value: subject[name] }))
        .map(function mapDef({ name, def, value }) {
        /* eslint-disable no-param-reassign */

            // Only allow either a non-empty object or a string for def
            if (!Is.string(def) && (!Is.object(def) || Is.objectEmpty(def))) {
                const e = Types.CheckerPropDefError;
                Throw([e.message, name, 'string|Object', typeof def], e.name);
            }

            // if a string is provided as def, set it as type and mark prop as required.
            if (Is.string(def)) def = { type: def, required: true };

            // make sure all the def props have the correct type.
            if (def.required !== undefined && !Is.boolean(def.required)) {
                const e = Types.CheckerPropDefError;
                Throw([e.message, `${name}.required`, 'boolean', typeof def], e.name);
            }
            if (def.map !== undefined && !Is.function(def.map)) {
                const e = Types.CheckerPropDefError;
                Throw([e.message, `${name}.map`, 'function', typeof def], e.name);
            }
            if (def.type !== undefined && !Is.function(Is[String(def.type)])) {
                const e = Types.CheckerPropDefTypeError;
                Throw([e.message, name, String(def.type)], e.name);
            }

            // has a def.default and no value.
            if (def.default !== undefined && value === undefined) value = def.default;

            // has a def.map, re evaluate.
            if (def.map) value = def.map(value);

            // a prop is def.required but the value doesn't exist.
            if (def.required && value === undefined) {
                const e = Types.CheckerPropReqError;
                Throw([e.message, name], e.name);
            }

            // a prop is def.typed but the value doesn't match.
            if (def.type && !Is[def.type](value)) {
                const e = Types.CheckerPropTypeError;
                Throw([e.message, name, `{${def.type}}`, typeof value], e.name);
            }

            return { [name]: value };
        /* eslint-enable no-param-reassign */
        })
        // convert back to an object, extending the original subject
        // so props that aren't on the defmap don't get lost.
        .reduce((acc, cur) => Object.assign(acc, cur), subject);
}
