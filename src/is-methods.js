/**
 * The methods available to the checker.
 * These will be merged with the "is" proxy.
 * @private
 */
export default {

    /**
     * @name objectEmpty
     * @memberof checker.is
     * @description Determine if an element is an object and has no keys
     * @param {Object} value - an object to be checked.
     * @returns {boolean} - Whether the object is empty or not.
     */
    objectEmpty(value) {
        return this.object(value) && Object.keys(value).length === 0;
    },

};
