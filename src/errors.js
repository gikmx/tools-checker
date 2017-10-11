export default {

    /**
     * An expected argument for Props was invalid or not provided.
     * @typedef {Error} PropsParamError
     */
    subject: { name: 'PropsParamError', message: 'Expecting {Object} subject' },
    defmap: { name: 'PropsParamError', message: 'Expecting {Object} defmap' },

    /**
     * A definition prop was sent, but it was invalid.
     * @typedef {Error} PropsDefError
     */
    nodef: { name: 'PropsDefError', message: 'Expecting an {Object|string} for def: ' },

    /**
     * A required property def was sent, but was invalid.
     * @typedef {Error} PropsBadReqError
     */
    noreq: {
        name: 'PropsBadReqError',
        message: 'Expecting «required» to be {boolean} on def: ',
    },

    /**
     * A required property def was sent, but was invalid.
     * @typedef {Error} PropsBadMapError
     */
    nomap: {
        name: 'PropsBadMapError',
        message: 'Expecting «map» to be {function} on def: ',
    },

    /**
     * The specified type defined to validate property, isn't valid.
     * @typedef {Error} PropsBadTypeError
     */
    notype: {
        name: 'PropsBadTypeError',
        message: 'Unsupported «type» on def: ',
    },

    /**
     * A required property was not found in subject.
     * @typedef {Error} PropsReqError
     */
    req: { name: 'PropsReqError', message: 'Expecting «required» prop: ' },


    /**
     * A property didn't have the correct type.
     * @typedef {Error} PropsTypeError
     */
    type: { name: 'PropsTypeError', message: 'Expecting «type» ' },

};
