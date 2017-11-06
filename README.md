# [@gik/tools-checker](http://gik.mx) *0.0.9*
> A minimal type-checker for JavaScript purists. Part of our [tools suite](https://github.com/gikmx/tools).

##### Contributors
- [Héctor Menéndez](mailto:hector@gik.mx) []()

##### Supported platforms

#### <a name="table-of-contents"></a> Table of contents
- **[checker](#checker)** A minimal type-checker for JavaScript purists.
  - **[is](#checker.is)** Determine if given value really belongs to the corresponding type.
    - **[objectEmpty](#checker.is.objectEmpty)** `member` Determine if an element is an object and has no keys
    - **[string](#checker.is.string)** `member` Determines if `value` is really a string.
    - **[number](#checker.is.number)** `member` Determines if `value` is really a number.
    - **[array](#checker.is.array)** `member` Determines if `value` is really an array.
    - **[function](#checker.is.function)** `member` Determines if `value` is really a function.
    - **[regexp](#checker.is.regexp)** `member` Determines if `value` is really a regexp.
    - **[boolean](#checker.is.boolean)** `member` Determines if `value` is really a boolean.
    - **[object](#checker.is.object)** `member` Determines if `value` is really an object.
  - **[props](#checker.props)** `function` Validates properties of given object.
- **[Types](#Types)** ``


# <a name="checker"></a> checker

A minimal type-checker for JavaScript purists.
> - [Standalone version](https://github.com/gikmx/tools-checker).
> - [Report a Bug](https://github.com/gikmx/tools-checker/issues).


###### Members

- [is](#checker.is)
- [props](#checker.props)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="checker.is"></a> is

Determine if given value really belongs to the corresponding type.


###### Members

- [objectEmpty](#checker.is.objectEmpty)
- [string](#checker.is.string)
- [number](#checker.is.number)
- [array](#checker.is.array)
- [function](#checker.is.function)
- [regexp](#checker.is.regexp)
- [boolean](#checker.is.boolean)
- [object](#checker.is.object)

<small>**[▲ Top](#table-of-contents)**</small>

---

### <a name="checker.is.objectEmpty"></a> objectEmpty
> static  property of [`checker.is`](#checker.is)


Determine if an element is an object and has no keys

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Whether the object is empty or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.string"></a> string
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a string.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is string or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.number"></a> number
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a number.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is number or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.array"></a> array
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really an array.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is array or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.function"></a> function
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a function.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is function or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.regexp"></a> regexp
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a regexp.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is regexp or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.boolean"></a> boolean
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a boolean.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is boolean or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.object"></a> object
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really an object.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is object or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

## <a name="checker.props"></a> props
> static  method of [`checker`](#checker)


Validates properties of given object.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>subject</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The object value whose properties will be inspected.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>defmap</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>An definition object map, describing each of the prop&#39; types.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>defmap.prop</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a> | 
                <a href="#string">string</a>
        </td>
        <td>The name of a corresponding subject&#39;s property.
If a string is used, it will be converted to: <code>{ type: &lt;string used&gt;, required:true }</code></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.type]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>Determines the type the prop should have,
all methods on <code>is()</code> are asupported. <b>Default <code>any</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.required]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#bool">bool</a>
        </td>
        <td>Whether the prop can be omitted.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.default]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value to use if prop is omitted
(cannot be used along <code>required</code>).</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.map]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#function">function</a>
        </td>
        <td>A function that will receive subject&#39;s
prop value and expects you to return acomputed value for it</td>
    </tr>
</table>


###### Returns
 [`Object`](#Object) <span style="font-weight:normal"> - The validated subject extended with default values (when applies).</span>
###### Throws
- `CheckerPropParamError` when invalid parameters are passed.
- `CheckerPropDefError` when a type definition is invalid.
- `CheckerPropDefTypeError` when a type defintiion is not supported.
- `CheckerPropReqError` when a required property is not found.
- `CheckerPropTypeError` when a property does not match the defintion.

###### Example 
```js
const subject = { a: 1, b: 'hello' z: undefined };
const result = props(subject, {
    a: { type:'number', required:true },
    b: 'string',
    c: { default: new Date() },
    d: { required: false, default: null, map: value => [value, true] },
})
// result:
// { a: 1, b: 'hello', c: '1981-06-23 10:06:08', d: [null, true], z: undefined }
```

<small>**[▲ Top](#checker)**</small>

---

# <a name="Types"></a> Types

###### Members

- [CheckerPropParamError](#Types.CheckerPropParamError)
- [CheckerPropDefError](#Types.CheckerPropDefError)
- [CheckerPropDefTypeError](#Types.CheckerPropDefTypeError)
- [CheckerPropReqError](#Types.CheckerPropReqError)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="Types.CheckerPropParamError"></a> CheckerPropParamError
> static  typedef of [`Types`](#Types)


A definition prop was sent, but it was invalid.



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.CheckerPropDefError"></a> CheckerPropDefError
> static  typedef of [`Types`](#Types)


The specified type is not a supported primitive.



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.CheckerPropDefTypeError"></a> CheckerPropDefTypeError
> static  typedef of [`Types`](#Types)


A required property was not found in subject.



<small>**[▲ Top](#Types)**</small>

---

## <a name="Types.CheckerPropReqError"></a> CheckerPropReqError
> static  typedef of [`Types`](#Types)


A property didn't have the correct type.



<small>**[▲ Top](#Types)**</small>

---

