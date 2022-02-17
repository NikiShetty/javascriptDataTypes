//backslash escape characters
var firstName = "Ben";
var lastName = "jolly";
console.log(firstName + " \n" + lastName);
console.log(firstName + " \\ " + lastName);
console.log(firstName + ":" + lastName); //????????????
console.log(firstName + "|" + lastName); //????????????
console.log(firstName + '"' + lastName); //????????????
console.log(firstName + "'" + lastName); //?????????
//-------------------------------------------------------------------------------

//Data Types
//strings
var str =
    "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a web page.";
console.log(str);
console.log(typeof str);
console.log(str.length);
console.log(str.indexOf("web"));
console.log(str.indexOf("web", 20));
console.log(str.lastIndexOf("web"));
console.log(str.search("web"));
//-------------------------------------------------------------------------------

////implicit coersion
var val1 = "50";
var val2 = 10;
var val3 = val1 + val2;
var val3 = val1 / val2;
console.log(typeof val3);
console.log(val3); //40
//-------------------------------------------------------------------------------

//extraction of the string
var str1 = "JavaScript is the world's most popular programming language.";
console.log(str1.slice(0, 5));
console.log(str1.slice(7));
console.log(str1.substring(-9));
console.log(str1.substr(0, 12));
console.log(str1.replace("is", "was"));
console.log(str1.replaceAll("is", "as"));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.length);
console.log(str1.trim());
console.log(str1.charAt(4));
console.log(str1.charCodeAt(0));
//-------------------------------------------------------------------------------

//Numbers
var num = 10;

console.log(typeof num);
console.log("hello" / num); //NaN
console.log(typeof num.toString()); //string
console.log(typeof num);
console.log("hello" / num);
console.log(num.toExponential(4));
console.log(num.toPrecision(3));
console.log(num.toFixed(5));
//-------------------------------------------------------------------------------
//converting string to number
var str3 = "Hello World";
console.log(typeof str3); //string

console.log(Number(str3)); //NaN

var conToString = Number(str3);
console.log(conToString);
console.log(typeof conToString); //?????????????? Help

var str4 = "89";
console.log(typeof str4); //numeric string
console.log(typeof Number(str4)); //number
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(parseFloat(10.98)); //10.98
console.log(parseInt(10.98));
10
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
//-------------------------------------------------------------------------------

//Boolean
var x = 20 > 10;
console.log(typeof x);
console.log(20 > 10);
//-------------------------------------------------------------------------------

//undefined
var numbers;
console.log(numbers);
console.log(typeof numbers);
//-------------------------------------------------------------------------------

var city = null;
console.log(city);
console.log(typeof city);
//-------------------------------------------------------------------------------

console.log(undefined == null); //true
console.log(undefined === null); //false
//-------------------------------------------------------------------------------

//Tasks

// var str = "Frontend development";
// console.log(str.slice(0, 6));
// console.log(str.length);
// console.log(str.toUpperCase());

// var str5 = "   JavaScript is the world's most popular programming language.   ";
// console.log(str5.toUpperCase());
// console.log(str5.trim());

// var x = "25";
// console.log(x == 25 && x === 25);
// console.log(x != 25 || x === 25);

// var str6 = " JavaScript is the world's most popular programming language.";
// console.log(str6.replace("is", "was"));

// var a = 5;
// var b = 40;
// console.log(a + "hello" + b); //5hello40

// var x = "30";
// var y = 55;
// console.log(x + y + "hello World" + x / 10);