# JAVASCRIPT : GUESS THE OUTPUT/APPROACH

#### Qx. Question
```javascript
x = 23;
const x;
```
<details><summary><b>Answer</b></summary>          
<p>
`Syntax Error: Missing initializer in const declaration`
 <br/>  
<b>Temporal Dead Zone: It is a behaviour that occurs with variables declared with _let_ and _const_ keywords. Below code throws same error.</b>

</p>
</details>

---------------
**Qx. Question**
```javascript
x = 23;
let x;
```
**answer:**                
`ReferenceError: Cannot access 'x' before initialization`    
**Temporal Dead Zone: It is a behaviour that occurs with variables declared with _let_ and _const_ keywords. Below code throws same error.**

--------------
**Qx. Question**
```javascript
let x;
const y;
var z;

console.log(x);
console.log(y);
console.log(z);
```
**answer:**                    
`undefined   // x`
```javascript
const y;         
      ^
SyntaxError: Missing initializer in const declaration
```
`undefined   // z`

---------------

**Qx. Question**
```javascript
console.log(1);
setTimeout(function() {console.log(2)}, 1000);
setTimeout(function() {console.log(3)}, 0);
console.log(4);
```
**answer:**  
`1`   
`4`   
`3`   
`2`                   
Even though the second timeout function has a waiting time of zero seconds, the javascript engine always evaluates the setTimeout function using the Web API and therefore, **the complete function executes before the setTimeout function can execute**.

---------------          


**Qx. Question**
```javascript
function x() {
    setTimeout(function() {
        console.log(i);
    }, 1000);
    var i = 1;
}

x();
```
**answer:**    
`1`     
Prints 1 after 1 second.
It does not give error because hoisting takes place and variable declaration appears to be on the top of code.          

---------------          


**Qx. Question**
```javascript
function x() {
    setTimeout(function() {
        console.log(i);
    }, 1000);
    let i = 1;
}

x();
```
**answer:** 
`1  // after 1 second`     
Prints 1 after 1 second.
Even though **let** variables are not hoisted, due to async nature of JS, the complete function code runs before the setTimeout function.               

---------------          


**Qx. Question**
```javascript
function x() {
    setTimeout(function() {
        console.log(i);
    }, 1000);
    i = 1;
    let i;
}

x();

```
**answer:**  
`ReferenceError: Cannot access 'i' before initialization`     
**Temporal Dead Zone**         

---------------          


**Qx. Question**
```javascript
(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();

```
**answer:**  
`2`   
`4`    
`3`    
`1`  // After two seconds     
* Even though the second timeout function has a waiting time of zero seconds, the javascript engine always evaluates the setTimeout function using the Web API and therefore, **the complete function executes before the setTimeout function can execute**
* The function does not have a function name and is not invoked because it is an **Immedidately Invoked Function.**
---------------          

**Qx. Question**    
```javascript
function func1() {
    setTimeout(() => {
        console.log(x);
        console.log(y);
    }, 3000);
    var x = 12;
    let y = 20;
}

func1();
```
**answer:**  
`12`     
`20`     
Even though **let** variables are not hoisted, due to async nature of JS, the complete function code runs before the setTimeout function. Therefore, it has access to both x and y.

---------------           

**Qx. Question**    
```javascript
function func2() {
    for(var i=0; i<3; i++) {
        setTimeout(()=> console.log(i), 2000);
    }
}

func2();
```
**answer:**  
`3`    
`3`   
`3`   
* Since variable declared with var keyword does not have block scope. 
* Also, inside the for loop, the variable i is incremented first and then checked.
---------------           

**Qx. Question**    
```javascript
function func2() {
    for(let i=0; i<3; i++) {
        setTimeout(()=> console.log(i), 2000);
    }
}

func2();
```
**answer:**  
// after 2 seconds    
`0`    
`1`    
`2`   
* let keyword has block scope.

---------------           


**Qx. Question**    
```javascript
let x= {}, y = {name:"Ronny"},z = {name:"John"};

x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};

console.log(x[y]);

```
**answer:**  
`{ name: 'Akki' }`     
* Adding objects as properties of another object should be done carefully.
* Writing **x[y] = {name:”Vivek”}** , is same as writing **x[‘object Object’] = {name:”Vivek”}** ,
* While setting a property of an object, **javascript coerces the parameter into a string**.
* Therefore, since **y** is an object, it will be converted to **‘object Object’**.

* Both x[y] and x[z] are referencing the same property.

---------------           


**Qx. Question**    
```javascript
function runFunc(){
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2");
    console.log("Hello" - "World" + 78);
    console.log("Hello"+ "78");
  }
  
  runFunc();
```
**answer:**  
`11`  
`NaN`          
`2-22`            
`NaN`               
`Hello78`             

* Coercion takes place
* **'+'** converts Number to String and outputs String
* **'-'** converts String to Number and performs operation, outputs Number ( typeof(NaN) = Number )
---------------           


**Qx. Question**    
```javascript
let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));
```
**answer:**  
`true   // Equality Coercion`           
`false`     


---------------           


**Qx. Question**    
```javascript
var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})();
```
**answer:**  
`NaN`     

**random() function has functional scope**, since x is declared and hoisted in the functional scope.

Rewriting the random function;
```javascript
function random(){
  var x; // x is hoisted
  x++; // x is not a number since it is not initialized yet
  console.log(x); // Outputs NaN
  x = 21; // Initialization of x
}
```

---------------           

**Qx. Question**    
```javascript
let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  console.log(hero.getPower());
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(getPower());
  console.log(getPower.apply(hero2));
```
**answer:**  
`99`     
`undefined`      
`42`     
In the line
```javascript
  let getPower = hero.getPower;
```
only getPower() function inside hero object is assigned.
So, when the function is invoked, it is invoked referencing the global object:
```javascript
window.getPower() = getPower();
```
---------------           


**Qx . Question**    
```javascript
const a = function(){
        console.log("a");
        console.log(this);
  
    const b = {
      func1: function(){
        console.log("b");
        console.log(this);
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log("c");
        console.log(this);
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();
```
**answer:**           
`a`               
`global/window object`                 
`b`              
`object "b"`               
`c`              
`global/window object`    

* Since we are using **arrow function inside func2**, this keyword refers to the global object.
---------------           

**Qx. Question**    
```javascript
  const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  
  b.f();
```
**answer:**             
`'Vivek'`              
`undefined`                 
`"Vivek`          
Only in the **IIFE (Immediately Invoked Functions)** inside the function f , the this keyword refers to the global/window object.

---------------           

**Qx. Each time bigFunc is called, an array of size 700 is being created, Modify the code so that we don't create the same array again and again.**    
```javascript
function bigFunc(element){
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again
```
**answer:** 
code can be modified by using closures 
```javascript
function bigFunc(){
  let newArray = new Array(700).fill('♥');
  return (element) => newArray[element];
}

let getElement = bigFunc(); // Array is created only once
getElement(599);
getElement(670);
```

---------------           

**Qx. Question**    
```javascript
(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);
```
**answer:**  
`45`      
Even though a is defined in the outer function, due to closure the inner functions have access to it.

---------------           

**Qx. The following code outputs 2 and 2 after waiting for one second. Modify the code to output 0 and 1 after one second.**    
```javascript
function randomFunc(){
  for(var i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}

randomFunc();
```
**answer:**  
* **Using _let_ keyword :**
```javascript
function randomFunc(){
  for(let i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}

randomFunc(); 
```

* **Using _closure_ :**
```javascript
function randomFunc(){
  for(var i = 0; i < 2; i++){
  (function(i){
      setTimeout(()=>console.log(i),1000);
    })(i);
  }
}

randomFunc(); 
```

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------           

**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------


**Qx. Question**    
```javascript
```
**answer:**  

---------------

**Qx. Question**    
```javascript
```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------


**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

**Qx. Question**    
```javascript

```
**answer:**  

---------------

 **Qx. We have to store the name of every item in an array. What will be your approach?**    
```javascript
[
    {
        "name": "Menu 1",
        "link" : "https://google.com",
        "subitems" : [
            {
                "name": "Menu 2",
                "link" : "https://google.com"
            }
        ]

    },
    {
        "name": "Menu 3",
        "link" : "https://google.com",
        "subitems" : [
            {
                "name": "Menu 4",
                "link" : "https://google.com",
                "subitems" : [
                    {
                        "name": "Menu 5",
                        "link" : "https://google.com"
                    },
                    {
                        "name": "Menu 6",
                        "link" : "https://google.com"
                    }
                ]
            }
        ]

    }
]
```
**answer:**  
* Deep Copy
* Using Recursion
---------------   
