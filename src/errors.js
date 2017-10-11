/**
 * @namespace __types
 * @memberof Tools
 */
export default {

    /**
     * An expected argument for props was invalid or not provided.
     * @typedef {Error} propsParamError
     * @memberof Tools.__types
     */
    subject: { name: 'propsParamError', message: 'Expecting {Object} subject' },
    defmap: { name: 'propsParamError', message: 'Expecting {Object} defmap' },

    /**
     * A definition prop was sent, but it was invalid.
     * @typedef {Error} propsDefError
     * @memberof Tools.__types
     */
    nodef: { name: 'propsDefError', message: 'Expecting an {Object|string} for def: ' },

    /**
     * A required property def was sent, but was invalid.
     * @typedef {Error} propsBadReqError
     * @memberof Tools.__types
     */
    noreq: {
        name: 'propsBadReqError',
        message: 'Expecting «required» to be {boolean} on def: ',
    },

    /**
     * A required property def was sent, but was invalid.
     * @typedef {Error} propsBadMapError
     * @memberof Tools.__types
     */
    nomap: {
        name: 'propsBadMapError',
        message: 'Expecting «map» to be {function} on def: ',
    },

    /**
     * The specified type defined to validate property, isn't valid.
     * @typedef {Error} propsBadTypeError
     * @memberof Tools.__types
     */
    notype: {
        name: 'propsBadTypeError',
        message: 'Unsupported «type» on def: ',
    },

    /**
     * A required property was not found in subject.
     * @typedef {Error} propsReqError
     * @memberof Tools.__types
     */
    req: { name: 'propsReqError', message: 'Expecting «required» prop: ' },


    /**
     * A property didn't have the correct type.
     * @typedef {Error} propsTypeError
     * @memberof Tools.__types
     */
    type: { name: 'propsTypeError', message: 'Expecting «type» ' },

};
