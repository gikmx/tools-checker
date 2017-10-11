/**
 * The methods available to the checker.
 * These will be merged with the "is" proxy.
 * @private
 */
export default {

    /**
     * Determine if an element is an object and has no keys
     * @name objectEmpty
     * @memberof Tools.checker.is
     * @param {Object} value - an object to be checked.
     * @returns {boolean}
     */
    objectEmpty(value) {
        return this.object(value) && Object.keys(value).length === 0;
    },

};
