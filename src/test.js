import Test from 'ava';
import {Types, Validate} from './';

const invalid = [undefined, null, true, 2, 'str'];
const valid = {
    subject:{ x:true },
    definitions:{ x:{ type:Boolean } },
};

Test('should throw if given a non-object subject', test => {
    test.plan(invalid.length);
    invalid.forEach(subject => {
        test.throws(() => Validate(subject), /Invalid subject; expecting Object/)
    });
});

Test('should throw if given non-object or empty definitions', test => {
    test.plan(invalid.length + 1);
    invalid
        .concat({})
        .forEach(definitions => {
            test.throws(() => Validate({}, definitions), /Invalid definitions/)
        });
});

Test('should allow an empty object as subject', test => {
    test.plan(1);
    test.notThrows(() => Validate({}, { x:{ ...valid.definitions.x, required:false } }));
});

Test('should throw if given non-object or empty definition properties', test => {
    test.plan(invalid.length + 1);
    invalid
        .concat({})
        .forEach(props => {
            test.throws(
                () => Validate(valid.subject, { x:props }),
                /Invalid definition property 'x'/
            )
        });
});

Test('should throw if given an unknown definition type', test => {
    test.plan(invalid.length);
    invalid.forEach(type => {
        test.throws(
            () => Validate(valid.subject, {x:{type}}),
            /Unknown type for x definition/
        )
    });
});

Test('should throw if required property is not present on subject', test => {
    test.throws(
        () => Validate({}, { x:{ type:Boolean, required:true } }),
        /Missing required x/
    );
});

Test('should setup default values for properties undefined on subject', test => {
    test.plan(1);
    const result = Validate({}, { x:{ type:Boolean, value:true } });
    test.deepEqual(result, valid.subject);
});


Test('should return the same object if no default values sent', test => {
    test.plan(2);
    test.deepEqual(Validate(valid.subject, valid.definitions), valid.subject);
    test.deepEqual(Validate({}, {x:{type:Boolean}}), {});
});

Test('should throw if an invalid type is sent', test => {
    test.plan(1);
    test.throws(() => Validate({x:'Hello'}, valid.definitions), /Invalid x property/)
})

Test('should allow to validate complex objects using a function as definition', test => {
    test.plan(2);

    const subject = {
        parent: {
            child1: { hello:true, world:1 },
            child2: {
                nested:{ is: { a: { pain: { equals: true } } } },
                array: [
                    { this:0, should:1, be:2, validated:'now' },
                ],
            }
        }
    };

    const definitions = {
        parent:{ type:Object, required:true, parse:parent => Validate(parent, {
            child1:{ type:Object, required:true, parse:child1 => Validate(child1, {
                hello:{ type:Boolean, required:true },
                world:{ type:Number, required:true },
                sucker:{ type:String, value:'!!!' },
            })},
            child2:{ type:Object, required:true, parse:child2 => Validate(child2, {
                nested:{ type:Object, required:true, parse:nested => Validate(nested, {
                    is:{ type:Object, required:true, parse:iz => Validate(iz, {
                        a:{ type:Object, required:true, parse:a => Validate(a, {
                            pain:{ type:Object, required:true, parse:pain => Validate(pain, {
                                equals:{ type:Boolean, required:true },
                                right:{ type:String, value:'?' },
                            })}
                        })}
                    })}
                })},
                array:{ type:Array, required:true, parse:arr => arr.map(o => Validate(o, {
                    this:{ type:Number },
                    should:{ type:Number },
                    be:{ type:Number },
                    validated:{ type:String },
                    please:{ type:String, value:'?' },
                }))}
            })}
        })}
    };

    test.notThrows(() => {
        const result = Validate(subject, definitions);
        test.deepEqual(result, {
            parent: {
                child1:{ hello:true, world:1, sucker:'!!!' },
                child2:{
                    nested:{ is:{ a:{ pain:{ equals:true, right:'?' } } } },
                    array: [
                        { this:0, should:1, be:2, validated:'now', please:'?' },
                    ],
                }
            }
        });
    });
})
