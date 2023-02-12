## Primitive Data Types
* String    - ('John' or "Doe")
* Number    - (3 or 3.6)
* BigInt    - (1234454241n)
* Boolean   - (true or false)
* Undefined - (variable declared but not assigned)
* Null      - (non-existent or invalid value)
* Symbol    - (Symbol('variableName') - unique value)

* **Note :**     
  Symbol data type was introduced in ES6
  Symbols are immutable and are unique
  const value1 = Symbol('hello');
  const value2 = Symbol('hello');
  **console.log(value1 === value2);  // false**

---------------

## Non-Primitive Types
* Object    - Collection of data in key-value pairs
    var obj = new Object();   // creates empty generic object
    var mycar = new Car();    // creates user defined object
    var obj1 = {
        x:  43,
        y:  "Hello world!",
        z: function(){
            return this.x;
        }
    }   

* Array     - Collection of data as ordered list
    var array1 = [5, "Hello", true, 4.1];

* **Note :**     
    Any data type that is not primitive data type, is of **_Object type_** in javascript.

---------------

## Hoisting:
* It refers to the process whereby the interpreter **appears** to move the **_declaration_** of functions, variables or classes to the top of their scope, prior to execution of the code
* Variable initializations are not hoisted, only variable declarations are hoisted
* Example:
    var x;
    console.log(x); // outputs "undefined"
    x = 10;

* To avoid hoisting, javascript can be run in strict mode by using **_"use strict";_** on top of the code

## == and === difference:
* = is used for assigning values to variables.
* == is used for comparison of values irrespective of datatypes. ('22' == 22    // return true)
* === used to compare both values and types.

---------------

## Implicit Type Coercion

**1. STRING COERCION :**     
* Takes place while using '+' operator.
* Number type is converted to String type.  

* **Note : '+' operator**     
    ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string.

**2. NUMBER COERCION :**       
* Takes place while using '-' operator.
* String type is converted to Number type.

* **Note :**     
    Type coercion takes place when using the ‘ - ‘ operator, a string is converted to a number and then subtraction takes place.

**3. BOOLEAN COERCION**
* Takes place when using logical operators, ternary operators, if statements and loop checks.

* **_Truthy values_**  will be converted (coerced) to **true**.
* **_Falsy values_** will be converted to **false**.
* All values except the following are **truthy values**:
    * *false*
    * *0*
    * *0n*
    * *-0*
    * *""*
    * *null*
    * *undefined*
    * *NaN*

* **LOGICAL OPERATORS**
    * **Do not return true or false. They always return one of the operands.**
    * **OR ( || ) operator**      
        * If the first value is truthy, then the first value is returned.
        * Otherwise, always the second value gets returned.
    * **AND ( && ) operator**
        * If both the values are truthy, always the second value is returned. 
        * If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

**4. EQUALITY COERCION**

* The ‘==’ operator, converts both the operands to the same type and then compares them.
* Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the case of ‘===’ operator.

---------------
## JavaScript is Dynmaically Typed

* Variables have no types
* Values have types
* Variables can change type
* Example
    * a = 110;
    * a = 'hello';
* In JS, variables are not associated with any type
* A variable can hold the value of any data type.

---------------

## NaN Property

* NaN represents **"Not-a-Number"**
* **typeof** NaN will return a **Number**
* **typeof()** is used to check the type of a value
* **isNaN()** is used to check if a value is NaN

---------------

## Pass By Value and Pass By Reference

* **Primitive data types are passed by value.**
* **Non-primitive data types are passed by reference.**  

---------------

## Immediately Invoked Function

* **An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.**
* Syntax of IIFE:         
    (function() {         
        // Do something;       
    })();         

---------------
## Call Back Functions

* A calback function is a function that is executed after some other function is completed 
* If we want to execute a function right after the return of some other function, then callbacks can be used.
* JavaScript functions have the type of Objects. 
* So, like any other objects (String, Arrays etc.), they can be passed as an argument to any other function while calling.

```
function add(a, b, callback) {
    console.log(`The sum of ${a} and ${b} is ${a+b}`);
    callback();
}

function display() {
    console.log('This must be printed after addition');
}

add(3,6,display);

/*
// can also be written as below

// passing the function with its definition in the add() call

add(5,6,function display(){
   document.write('This must be printed after addition.');
   }); 

*/

```

```
Output:

The sum of 3 and 6 is 9
This must be printed after addition
```
----------------
## Higher Order Functions

* **Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.**

* Higher order functions are a result of functions being **first-class citizens** in javascript.

* Presence of a Higher-order function does not imply the presence of a First-order function.

* **Note :**   
Functions such as **filter(), map(), reduce(), some()** etc, are examples of Higher-Order Functions.

---------------

## First-Order Function

* Function are treated as a variable that can be assigned to any other variable or passed as an argument.

* The "first-class" concept only has to do with functions in programming languages.

* Presence of the First-class function implies the presence of a higher-order function.

* **Note :**               
The function that is passed as an argument to another function is called the **callback function**

----------------

## "this" keyword

* **The “this” keyword refers to the object that the function is a property of.**

* The value of “this” keyword will always depend on the object that is invoking the function.
```
function doSomething() {
  console.log(this);
}
        
doSomething();
```
* The function is invoked in the global context, **the function is a property of the global object.**

-------------
DO REMAINING

---------------



--------------

## Memoization

```
function memoizeAddTo256() {
    var cache = {};

    return function(num) {
        if(num in cache) {
            console.log("Cached Value");
            return cache[num];
        }
        else {
            console.log("Normal Value");
            cache[num] = num + 256;
            return cache[num];
        }
    }
}

var memoizedFunc = memoizeAddTo256();

memoizedFunc(20); // Normal Value
memoizedFunc(20); // Cached Value

```
* Memoization is used for expensive function.
* Memoization saves time but uses more memory to store the computed results.
* Memoization can also be used in fibonacci series program.

* **Note :**     
    Although using memoization saves time, it results in larger consumption of memory since we are storing all the computed results.

---------------

* **Fibonacci - Memoization**

```
                            fib(5)   
                     /                 \        
               fib(4)                  fib(3)   
             /      \                /       \
         fib(3)      fib(2)         fib(2)    fib(1)
        /   \          /    \       /      \ 
  fib(2)   fib(1)  fib(1) fib(0) fib(1) fib(0)
  /    \ 
fib(1) fib(0) 

In the above tree fib(3), fib(2), fib(1), fib(0) all are called more then once.
```

* **Program for Fibonacci using Memoization Table**
```
function fib(n)
    {
        let term = new Array(1000);
        term.fill(0);
 
        // base case
        if (n <= 1)
            return n;
 
        if (term[n] != 0)
            return term[n];
 
        else
        {
            term[n] = fib(n - 1) + fib(n - 2);
            return term[n];
        }
    }
 
    let n = 6;
    console.log(fib(n));

```

---------------

## Recursion

* Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.

* Fibonacci Number using Recursion
```
function fib(n) 
{
    if (n <= 1)
        return n;
    
    return fib(n - 1) + fib(n - 2);
}

let n = 6;
console.log(fib(n));
```

* Sum of all elements in an array using Recursion
```
function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}

computeSum([7, 8, 9, 99]); // Returns 123
```

---------------

## Constructor Function in JS
* **Constructor functions are used to create objects in javascript.**
* To create multiple objects having similar properties and methods, constructor functions are used.
* Name of a constructor function should always be written in Pascal Notation. 

```
function Person(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");
console.log(person1);

var person2 = new Person("Courtney", 34, "female");
console.log(person2);

var person3 = new Person("Lilly", 17, "female");
console.log(person3);
```

* To create new object **new keyword** should be used
* Constructor functions allow us to group similar objects

---------------

## DOM - DOCUMENT OBJECT MODEL

* DOM is a programming interface for HTML and XML documents.
* When the browser tries to render a HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.

[Read More](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

```
<html>
    <head>
        <title>
            DOM example
        </title>
    </head>
    <body>
        <p id = "para1" > Hello </p>
        <p id = "para2" > Hey </p>
    </body>
</html>
```

---------------

## Arrow Functions

* Introduced in ES6
* Shorter syntac for declaring functions
* Arrow functions can only be used as a function expression

---------------