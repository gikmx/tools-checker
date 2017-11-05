/**
 * The types that are automatically supported by Javascript.
 * @private
 */
export default [

    /**
     * Determines if `value` is really a string.
     * @name string
     * @memberof checker.is
     * @param {*} value
     * @returns {boolean}
     */
    String,

    /**
     * Determines if `value` is really a string.
     * @name number
     * @memberof checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Number,

    /**
     * Determines if `value` is really a string.
     * @name array
     * @memberof checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Array,

    /**
     * Determines if `value` is really a string.
     * @name function
     * @memberof checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Function,

    /**
     * Determines if `value` is really a string.
     * @name regexp
     * @memberof checker.is
     * @param {*} value
     * @returns {boolean}
     */
    RegExp,

    /**
     * Determines if `value` is really a string.
     * @name boolean
     * @memberof checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Boolean,

    /**
     * Determines if `value` is really a string.
     * @name object
     * @memberof checker.is
     * @param {*} value
     * @returns {boolean}
     */
    Object,

].reduce((result, type) => ({
    ...result,
    [type.name.toLowerCase()]: type,
}), {});
