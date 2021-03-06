// --------------------- Boolean -------------------- //
/**
 * The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
 */
let isDone: boolean = false;

// --------------------- Number -------------------- //
/**
 * As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// --------------------- String -------------------- //

/**
 * Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
 */
let doubleQuotes: string = "Double quoted string"
let singleQuotes: string = "Single quoted string"

// You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.

let fullName: string = "Dhrubaneel Das"
let age: number = 30

let sentence: string = `Hello, my name is ${fullName} and I am ${age} years old.`;

// --------------------- Array -------------------- //

/**
 * TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. 
 */

// In the first, you use the type of the elements followed by [] to denote an array of that element type:
let list1: number[] = [1, 2, 3];

// The second way uses a generic array type, Array<elemType>:
let list2: Array<number> = [1, 2, 3];


// --------------------- Tuple -------------------- //


