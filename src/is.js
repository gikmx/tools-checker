import PRIMITIVES from './is-primitives';
import METHODS from './is-methods';

export { PRIMITIVES, METHODS };

/**
 * Gives you tools to determine the type of a value.
 * @module is
 * @memberof Tools.Checker
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
