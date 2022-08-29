// Instructions: 
//  - You should solve all these questions using .map() function 
// */


// /*
//  * Exercise 1: 
//  * 
//  * Make an array of numbers that are doubles of the first array
//  *
//  * Test Case: 
//  *
//  * console.log(doubleNumbers([2, 5, 100]));
//  * 
//  * Result:
//  * [4, 10, 200]
// */
let arr = [3, 4, 5, 6];

let doubleNumbers = arr.map(x =>x*2);
console.log(doubleNumbers);





//  * Exercise 2 : 
//  * 
//  * Take an array of numbers and make them strings
//  *
//  * Test Case: 
//  *
//  * console.log(stringItUp([2, 5, 100]));
//  * 
//  * Result:
//  * ["2", "5", "100"]
// */

const arrOfNum = [1, 2, 3];

const stringItUp = arrOfNum.map(num => {
  return String(num);
});


console.log(stringItUp);



//  * Exercise 3:  
//  * 
//  * Capitalize each of an array of names
//  *
//  * Test Case: 
//  *
//  * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
//  * 
//  * Result:
//  *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
function capitalizeNames(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }
  
  
  console.log(capitalizeNames(['hello', 'world']));

// */
// /*
//  * Exercise 4:  
//  * 
//  * Make an array of strings of the names
//  *
//  * Test Case: 
//  *
//  * console.log(namesOnly([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  *   ])); 
//  * 
//  * Result:
//  *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// */function namesOnly(arr) {
// /*
function namesOnly(arr) {
    return arr.map(i => i.name);
  }
  var result = namesOnly([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
  console.log(result);
  


//  * Exercise 5:  
//  * 
//  * Make an array of strings of the names saying whether or not they can go to The Matrix
//  *
//  * Test Case: 
//  *
//  * console.log(makeStrings([
//  *    {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  * ]));  
//  * 
//  * Result:
//  * 
//  * ["Angelina Jolie can go to The Matrix", 
//  * "Eric Jones is under age!!", 
//  * "Paris Hilton is under age!!", 
//  * "Kayne West is under age!!", 
//  * "Bob Ziroll can go to The Matrix"]
//  * 
//  */
function makeStrings(arr){
    let str = arr.map(function(s) {
      if(s.age >= 17) {
       return s.name + 'can go to The Matrix';
      } else if(s.age) {
        return s.name + 'is under age!';
    } 
  })
  return str;
  }
  var result = makeStrings([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
  console.log(result);


// * Exercise 6:  
//  * 
//  * Make an array of the names in h1s, and the ages in h2s
//  *
//  * Test Case: 
//  *
//  * console.log(readyToPutInTheDOM([
//  *   {
//  *       name: "Angelina Jolie",
//  *       age: 80
//  *   },
//  *   {
//  *       name: "Eric Jones",
//  *       age: 2
//  *   },
//  *   {
//  *       name: "Paris Hilton",
//  *       age: 5
//  *   },
//  *   {
//  *       name: "Kayne West",
//  *       age: 16
//  *   },
//  *   {
//  *       name: "Bob Ziroll",
//  *       age: 100
//  *   }
//  * ])); 
//  * 
//  * Result:
//  * 
//  * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
//  * "<h1>Eric Jones</h1><h2>2</h2>", 
//  * "<h1>Paris Hilton</h1><h2>5</h2>", 
//  * "<h1>Kayne West</h1><h2>16</h2>", 
//  * "<h1>Bob Ziroll</h1><h2>100</h2>"]
//  */
function readyToPutInTheDOM(arr) {
    arr.map(c=> {
       document.write("<h1>" + c.name + "</h1>");
       document.write("<h2>" + c.age+ "</h2>");
    });
    
    arr.forEach(c=> {
       document.write("<h1>" + c.name + "</h1>");
       document.write("<h2>" + c.age+ "</h2>");
    });
  }
  
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])

// * Exercise 7:
// * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
// *
// * Test Cases:
// *   Test Case 1:  doubleValues([1,2,3]) 
// *   Test Case 2:  doubleValues([1,-2,-3])  
// *
// * Result:
// * Test Case 1: [2,4,6] 
// * Test Case 2: [2,-4,-6]
// */
function doubleValues(arr){
    return arr.map(function(value,index,array){
          return value*2;
      });   
  }
  console.log(doubleValues([1,4,7,8]))

//   * Exercise 8:
//   * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
//   *
//   *
//   * Test Cases :
//   *   Test Case 1:  valTimesIndex([1,2,3])  
//   *   Test Case 2:  valTimesIndex([1,-2,-3]) 
//   * 
//   * Result
//   * Test Case 1: [0,2,6]
//   * Test Case 2: [0,-2,-6]
//   */
function valTimesIndex(arr){
    return arr.map(function(value,index,array){
  return value*index;
  });   
  }
  console.log(valTimesIndex([1,2,3]))

//   * Exercise 9:
//   * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
//   * of that key in each object.
//   * 
//   * Test Case:
//   * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
//   * 
//   * Result:
//   * ['Elie', 'Tim', 'Matt', 'Colt']
//   */


function extractFullName(arr){
    return arr.map(function(value,index,array){
  return value.first+" "+value.last;
  });   
  }
  console.log(
    extractFullName([
      { first: "Elie", last: "Schoppik" },
      { first: "Tim", last: "Garcia" },
      { first: "Matt", last: "Lane" },
      { first: "Colt", last: "Steele" }
    ])
  );
//   * Exercise 10:
//   * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
//   * 
//   * Examples:
//   * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
//   */
function extractKey(arr, key){
    return arr.map(function(value,index,array){
     return value[key];
   });   
  }
  console.log(
    extractKey(
      [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
      "name"
    )
  );


//Filter 10 - 15 you should use Array.prototype.filter
/*
10
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
    var newArr = [];
    var reducer = acc => {
      if (acc % 2 == 0) {
        return acc;
      }
    };
    return arr.filter(reducer);
  }
   console.log(evenOnly([1, 8, 6, 4]));

/*
11
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
    var reducer = acc => {
      if (acc % 4 == 0) {
        return acc;
      }
    };
    return arr.filter(reducer);
  }
  console.log(multiFour([1, 8, 6, 4]));
  

/*
12
**this question not that easy maybe you will need to use two functions inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr, str) {
    return arr.filter(a => {
      if (a[0] == str) {
        return a;
      }
    });
  }
  console.log(containChar(["hello", "world"], "w"));
/*
13
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(arr) {
    return arr.filter((a, i) => {
      if (a.length % 2 == 1 && i % 2 == 0) {
        return a;
      }
    });
  }
  var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(evenIndexOddLength(strings));

/*
14
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(arr, age) {
    return arr.filter(a => {
      if (a.age > age) {
        return a;
      }
    });
  }
  console.log(olderThan(persons, 56));
/*
15
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(arr, num) {
    return arr.filter(a => {
      if (a.length < num) {
        return a;
      }
    });
  }
  console.log(shorterThan(strings, 5));