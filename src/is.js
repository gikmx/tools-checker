import PRIMITIVES from './is-primitives';
import METHODS from './is-methods';

export { PRIMITIVES, METHODS };

/**
 * @module is
 * @memberof checker
 * @description Determine if given value really belongs to a _primitive type__.
 */
export const Is = new Proxy(METHODS, {

    get(self, name) {
        if (self[name]) return self[name];
        if (!PRIMITIVES[name]) return undefined;
        return (value) => {
            // The constructor  might not always come, swallow the error in that case.
            let pass;
            try {
                pass = !!value.constructor && value.constructor === PRIMITIVES[name];
            } catch (e) {
                pass = false;
            }
            return pass;
        };
    },

});

export default Is;
