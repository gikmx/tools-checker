import Thrower from '@gik/tools-thrower';
import Err from './errors';
import Is from './is';

/**
 * Error shorthand.
 * @private
 */
function thrower({ message, name }, suffix = '') {
    // const sufix = value !== undefined ? `, got '${JSON.stringify(value)}'.` : '';
    throw Thrower(message + suffix, name);
}

/**
 * Validates properties of given object.
 * @memberof Tools.checker
 *
 * @param {Object} subject - The object value whose properties will be inspected.
 * @param {Object} defmap - An definition object map, describing each of the prop' types.
 * @param {Object|string} defmap.prop
 *        The name of a corresponding subject's <br>
 *        *If a string is used, it will be converted to:*<br>
 *        `{ type: <string used>, required:true }`
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
 * @throws {propsDefError} - [read](#propsdeferror)
 * @throws {propsParamError} - [read](#propsparamerror)
 * @throws {propsBadReqError} - [read](#propsbadreqerror)
 * @throws {propsBadMapError} - [read](#propsbadmaperror)
 * @throws {propsBadTypeError} - [read](#propsbadtypeerror)
 * @throws {propsReqError} - [read](#propsreqerror)
 * @throws {propsTypeError} - [read](#propstypeerror)
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
    if (!Is.object(subject) || Is.objectEmpty(subject)) thrower(Err.subject, subject);
    if (!Is.object(defmap) || Is.objectEmpty(defmap)) thrower(Err.defmap, defmap);

    return Object
        .keys(defmap)
        .map(name => ({ name, def: defmap[name], value: subject[name] }))
        .map(function mapDef({ name, def, value }) {
        /* eslint-disable no-param-reassign */

            // Only allow either a non-empty object or a string for def
            if (!Is.string(def) && (!Is.object(def) || Is.objectEmpty(def)))
                thrower(Err.nodef, `'${name}', got '${typeof def}'`);

            // if a string is provided as def, set it as type and mark prop as required.
            if (Is.string(def)) def = { type: def, required: true };

            // make sure all the def props have the correct type.
            if (def.required !== undefined && !Is.boolean(def.required))
                thrower(Err.noreq, `'${name}', got '${typeof def.required}'`);
            if (def.map !== undefined && !Is.function(def.map))
                thrower(Err.nomap, `'${name}', got '${typeof def.map}'`);
            if (
                def.type !== undefined &&
                (!Is.string(def.type) || !Is.function(Is[def.type]))
            ) thrower(Err.notype, `'${name}', got '${JSON.stringify(def.type)}'`);

            // has a def.default and no value.
            if (def.default !== undefined && value === undefined) value = def.default;

            // has a def.map, re evaluate.
            if (def.map) value = def.map(value);

            // a prop is def.required but the value doesn't exist.
            if (def.required && value === undefined) thrower(Err.req, `'${name}'`);

            // a prop is def.typed but the value doesn't match.
            if (def.type && !Is[def.type](value)) {
                const suffix = `'${def.type}' on prop: '${name}', got '${typeof value}'`;
                thrower(Err.type, suffix);
            }

            return { [name]: value };
        /* eslint-enable no-param-reassign */
        })
        // convert back to an object, extending the original subject
        // so props that aren't on the defmap don't get lost.
        .reduce((acc, cur) => Object.assign(acc, cur), subject);
}
