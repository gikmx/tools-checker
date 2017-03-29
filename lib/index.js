/** @module validate */

export const Types = [
    String, Number, Array, Function, RegExp, Boolean, Object, Symbol, Date, Error
];

/**
 * Validates properties inside an object.
 *
 * @param {object} subject - The subject object whose properties will be inspected.
 * @param {object} definitions - An object containing the properties and their types.
 *
 * @return {object} The validated subject with default values (if applicable)
 */
export function Validate(subject, definitions){
    CheckObject({ type:'subject', value:subject, allowEmpty:true })
    CheckObject({ type:'definitions', value:definitions });
    Object.keys(definitions).forEach(name => {
        // if a definition is a function, the run it agains the subject value
        // and the result will be the new result value.
        if (definitions[name] && definitions[name].constructor === Function)
            return subject[name] = definitions[name](subject[name]);
        // Validate definition
        CheckObject({ name, type:'definition property', value: definitions[name]});
       // Obtain the required properties
        const { type, value, required } =  definitions[name];
        // Make sure a known type is provided.
        if (Types.indexOf(type) === -1)
            throw new TypeError(`Unknown type for ${name} definition`);
        // If a property is not present and a value is specified on the definition, set it
        if (subject[name] === undefined && value) subject[name] = value;
        // Determine the target type to compare, throw if required and not present.
        const target = subject[name]? subject[name].constructor : subject[name];
        if (required && target === undefined)
            throw new TypeError(`Missing required ${name}`);
        // Either not present and not required or valid? we're done, otherwise: boom.
        if ((!target && !required) || (target === type)) return;
        throw new TypeError(`Invalid ${name} property; expecting ${type.name}, got ${target.name}`);
    });
    return subject;
}

export function CheckObject({name=null, type, value, allowEmpty=false }){
    name = (!name || name.constructor !== String) ? '' : ` '${name}'`;
    let error = false;
    if (!value || value.constructor !== Object) error = 'Object';
    else if (!allowEmpty && !Object.keys(value).length) error = 'non-empty Object';
    if (!error) return true;
    value = value ? value.constructor.name : value;
    throw new TypeError(`Invalid ${type}${name}; expecting ${error}, got: ${value}`);
}

export default Validate;
