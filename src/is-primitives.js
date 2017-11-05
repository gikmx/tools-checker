/**
 * The types that are automatically supported by Javascript.
 * @private
 */
export default [

    /**
     * Determines if `value` is really a string.
     * @name string
     * @memberof checker.is
     * @param {*} value - The value you need to check.
     * @returns {boolean} - Wheter `value` is string or not.
     */
    String,

    /**
     * Determines if `value` is really a number.
     * @name number
     * @memberof checker.is
     * @param {*} value - The value you need to check.
     * @returns {boolean} - Wheter `value` is number or not.
     */
    Number,

    /**
     * Determines if `value` is really an array.
     * @name array
     * @memberof checker.is
     * @param {*} value - The value you need to check.
     * @returns {boolean} - Wheter `value` is array or not.
     */
    Array,

    /**
     * Determines if `value` is really a function.
     * @name function
     * @memberof checker.is
     * @param {*} value - The value you need to check.
     * @returns {boolean} - Wheter `value` is function or not.
     */
    Function,

    /**
     * Determines if `value` is really a regexp.
     * @name regexp
     * @memberof checker.is
     * @param {*} value - The value you need to check.
     * @returns {boolean} - Wheter `value` is regexp or not.
     */
    RegExp,

    /**
     * Determines if `value` is really a boolean.
     * @name boolean
     * @memberof checker.is
     * @param {*} value - The value you need to check.
     * @returns {boolean} - Wheter `value` is boolean or not.
     */
    Boolean,

    /**
     * Determines if `value` is really an object.
     * @name object
     * @memberof checker.is
     * @param {*} value - The value you need to check.
     * @returns {boolean} - Wheter `value` is object or not.
     */
    Object,

].reduce((result, type) => ({
    ...result,
    [type.name.toLowerCase()]: type,
}), {});
