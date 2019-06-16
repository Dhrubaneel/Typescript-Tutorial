# Day 2

## Agenda
1) Basic Types
2) Variable Declarations
3) Interfaces

### Basic Types
The Type System represents the different types of values supported by the language. The Type System checks the validity of the supplied values, before they are stored or manipulated by the program. This ensures that the code behaves as expected. The Type System further allows for richer code hinting and automated documentation too.

JavaScript is not a typed language. It means we cannot specify the type of a variable such as number, string, boolean etc. However, TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. TypeScript provides data types as a part of its optional Type System. We can specify the type using ``` :Type ``` after the name of the variable, parameter or property. There can be a space after the colon. TypeScript supports much the same types as in JavaScript, with a convenient enumeration type (enums) thrown in to help things along.

**Note:**- Check **types.ts** for example of different types of data type in Typescript.

#### The Any type
The **any** data type is the super type of all types in TypeScript. It denotes a dynamic type. Using the **any** type is equivalent to opting out of type checking for a variable.

#### Built-in types
The built-in types in typescript are 

| Data Type  | Keyword  | Description  |
|---|---|---|
| Number  | number  | Double precision 64-bit floating point values. It can be used to represent both, integers and fractions.  |
| String  | string  | Represents a sequence of Unicode characters  |
| Boolean  | boolean  | Represents logical values, true and false  |
| Void  | void  | Used on function return types to represent non-returning functions  |
| Null  | null  | Represents an intentional absence of an object value.  |
| Undefined	| undefined	| Denotes value given to all uninitialized variables |

**Note** − There is no ***integer*** type in TypeScript and JavaScript.

#### User-defined Types
User-defined types include Enumerations (enums), classes, interfaces, arrays, and tuple. These are discussed in detail in the later chapters.

#### Difference between String and string
Here is an example that shows the differences, which will help with the explanation.
```sh
var s1 = new String("Avoid using new where possible");
var s2 = "A string, in TypeScript of type 'string'";
var s3: string;
```
```String``` is the JavaScript String type, which you could use to create new strings. Nobody does this as in JavaScript the literals are considered better, so s2 in the example above creates a new string without the use of the new keyword and without explicitly using the String object.

```string``` is the TypeScript string type, which you can use to type variables, parameters and return values.

Use of ```String```. You probably never need to use it, string literals are universally accepted as being the correct way to initialize a string. In JavaScript, it is also considered better to use object literals and array literals too:

```sh
var arr = []; // not var arr = new Array();
var obj = {}; // not var obj = new Object();
```
If you really had a penchant for the string, you could use it in TypeScript in one of two ways...
```sh
var str: String = new String("Hello world"); // Uses the JavaScript String object
var str: string = String("Hello World"); // Uses the TypeScript string type
```
