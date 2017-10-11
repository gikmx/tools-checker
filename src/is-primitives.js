/**
 * The types that are automatically supported by Javascript.
 * @private
 */
export default [

    /**
     * Determines if `value` is really a string.
     * @name string
     * @memberof Tools.Checker.is
     * @param {*} value
     * @returns {boolean}
     */
    String,

    /**
     * Determines if `value` is really a string.
     * @name number
     * @memberof Tools.Checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Number,

    /**
     * Determines if `value` is really a string.
     * @name array
     * @memberof Tools.Checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Array,

    /**
     * Determines if `value` is really a string.
     * @name function
     * @memberof Tools.Checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Function,

    /**
     * Determines if `value` is really a string.
     * @name regexp
     * @memberof Tools.Checker.is
     * @param {*} value
     * @returns {boolean}
     */
    RegExp,

    /**
     * Determines if `value` is really a string.
     * @name boolean
     * @memberof Tools.Checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Boolean,

    /**
     * Determines if `value` is really a string.
     * @name object
     * @memberof Tools.Checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Object,

].reduce((result, type) => ({
    ...result,
    [type.name.toLowerCase()]: type,
}));
