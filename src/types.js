import PRIMITIVES from './is-primitives';

const primitives = Object
    .keys(PRIMITIVES)
    .join('|');

/**
 * An expected argument for props was invalid or not provided.
 * @typedef {Error}
 * @memberof Types
 */
export const CheckerPropParamError = {

    name: 'CheckerPropParamError',
    message: 'Invalid parameter «%s». Expecting {%s}, got "%s"',
};

/**
 * A definition prop was sent, but it was invalid.
 * @typedef {Error}
 * @memberof Types
 */
export const CheckerPropDefError = {
    name: 'CheckerPropDefError',
    message: 'Invalid def «%s». Expecting {%s}, got "%s"',
    // message: 'Expecting an {Object|string} for def: ',
};

/**
 * The specified type is not a supported primitive.
 * @typedef {Error}
 * @memberof Types
 */
export const CheckerPropDefTypeError = {
    name: 'CheckerPropDefTypeError',
    message: `Invalid type on def «%s». Expecting [${primitives}], got "%s"`,
};

/**
 * A required property was not found in subject.
 * @typedef {Error}
 * @memberof Types
 */
export const CheckerPropReqError = {
    name: 'CheckerPropReqError',
    message: 'Missing required property «%s».',
};

/**
 * A property didn't have the correct type.
 * @typedef {Error}
 * @memberof Types
 */
export const CheckerPropTypeError = {
    name: 'CheckerPropTypeError',
    message: 'Invalid property «%s». Expecting {%s} got "%s"',
};

export default {
    CheckerPropParamError,
    CheckerPropDefTypeError,
    CheckerPropDefError,
    CheckerPropTypeError,
    CheckerPropReqError,
};
