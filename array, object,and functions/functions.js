/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// function tellFortune(jobTitle, Location, partner, numChildren) {
//     var info = 'You will be a ' + jobTitle + ' in ' + Location + ' and married to ' +
//     partner + ' ' + ' with ' + numChildren + ' kids.';
//     console.log(info);
// }
// tellFortune('Pharmacist', 'Jordan', 'Mohammad', 3);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// Ex2
// function testNum(a) {
//     var y= (a * 7);
//     if (y >= 0){
//     console.log('Your doggie is ' + " " + y + " " + 'years old in dog years!')
//     }
//     else if (y < 0){
//     console.log("Not exist");
//     }}
    
    
//     testNum (-1)



/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
// */
// function calculateSupply(age, amountPerDay) {
//     var maxAge = 100;
//     var totalConsumed = (amountPerDay * 365) * (maxAge - age);
//     var amount = 'You will need ' + totalConsumed + ' to last you until the ripe old age of ' + maxAge;
//     console.log(amount);
//     }

//     calculateSupply(26, 1);

/*

// Ex4
function cube (prise , value){
var product = (prise * 4)
console.log( product)
var product = (value * 4)
console.log( product)
}
cube (5,3)

// Ex5
function fullName (firstName, LastName){
    console.log (firstName + " " + LastName)
}
fullName ("Abdulla" , "Nsour");

// Ex6
// function average (a,b,c,d,e){
//     var all=(a + b + c + d + e )
//     console.log(all)
//     var cul = (all / 5)
//     console.log(cul)
// }
// average(1,2,3,4,5)


// Ex6
function average (a,b,c,d,e){
    var all=((a + b + c + d + e)/5 )
    console.log(all)
}
average(1,2,3,4,5)

// Ex7
function randomNumber (){
    let randomNumber= Math.random() .toFixed(2)
console.log(randomNumber)
}
randomNumber ()

// Ex9
function canIGetADrivingLicense (age){
    if (age >= 20){
        return "yes you can";
    } 
    else {
        return `please come back after ${20-age}years to get one`
    }
}

// Ex10

function sameLength(st1,st2){
    if(st1.length == st2.length){
return true;
    }
    else return false;
}
console.log(sameLength("tee","tree"));

// Ex11
function largerNubmer(num1,num2){
    if(num1>num2){
return "the largerNubmer is: "+num1;
    }
    if(num1==num2){
return "the number is equal";
    }
    return "the largerNubmer is: "+ num2;

}
console.log(largerNubmer(3,4));
  //console.log(largerNubmer(3,3));
console.log(largerNubmer(7,4));

// Ex12
function smallerNubmer(num1,num2,num3){
    if(num1<num2 && num1<num3){
return "the smallerNubmer is: "+num1;
    }
if(num1>num2 && num3>num2){
    return "the smallerNubmer is: "+ num2;}
    else  return "the smallerNubmer is: "+ num3;

}
console.log(smallerNubmer(3,4,2));
console.log(smallerNubmer(1,3,6));
console.log(smallerNubmer(7,4,8));

// Ex13
function shorterString(s1,s2,s3,s4,s5){
    if(s1.length<s2.length && s1.length<s3.length && s1.length<s4.length && s1.length<s5.length){
return s1;
    }
    if(s2.length<s1.length && s2.length<s3.length && s2.length<s4.length && s2.length<s5.length){
return s2;
    }
    if(s3.length<s1.length && s3.length<s2.length && s3.length<s4.length && s3.length<s5.length){
    return s3;
}
if(s4.length<s1.length && s4.length<s2 && s4.length<s3.length && s4.length<s5.length){
    return s4;
}
return s5;

}
console.log(shorterString("air","tr","car","github","byyyyyyyy"));
console.log(shorterString("air","t","car","github","by"));
// Ex14
function longerString(s1,s2,s3,s4,s5){
if(s1.length>s2.length && s1.length>s3.length && s1.length>s4.length && s1.length>s5.length){
return s1;
    }
    if(s2.length>s1.length && s2.length>s3.length && s2.length>s4.length && s2.length>s5.length){
return s2;
    }
    if(s3.length>s1.length && s3.length>s2.length && s3.length>s4.length && s3.length>s5.length){
    return s3;
}
if(s4.length>s1.length && s4.length>s2.length && s4.length>s3.length && s4.length>s5.length){
    return s4;
}
return s5;

}
console.log(longerString("air","tr","car","github","byyyyyyyy"));
console.log(longerString("air","t","car","github","by"));

// Ex15
function isEven (number){
    let remainder = (number % 2)
    if (remainder == 0)
    {
        console.log(`${number} is True` + " " + ' & this is Task 15')
    }else {
        console.log(`${number} is false`+ " " +' & this is Task 15')
    }
}
isEven (6)


// Ex16
function isOdd (number){
let remainder = (number % 2)
if (remainder == 0)
{
    console.log(`${number} is False`)
}else {
    console.log(`${number} is True`)
}
}
isOdd(5)


// Ex17
function positive (number){

if (number >= 0)
{
    console.log(number)
}else {
    console.log(number * -1)
}
}
positive(0)


// Ex18, Ex19 & Ex20 is the same task with Ex5, Ex6 & Ex7 

//Ex21

function randomBetweenNumbers(min,max){
    return Math.floor(Math.random()*(max - min +1)+ min) 
}

randNum = randomBetweenNumbers(1,8);
console.log(randNum)

//Ex22
// function scoreInUniversty (score){
// if (score >=101){
//     console.log( 'undefined')}
// else if (score >=95){
//     console.log( 'A')
// }
// else if (score >=85){
//     console.log( 'B')
// }
// else if (score >=70){
//     console.log( 'C')
// }
// else if (score >=50){
//     console.log( 'D')
// }
// else if (score >=0){
//     console.log( 'F')
// }
// else if (score <=0){
//     console.log( 'undefined')}
// }
// scoreInUniversty (99)


//Ex22 Switch statement
function grade (g) {
    switch (g = 0){
        case g >= 95 && g <=100:
        console.log('A');
        break;
        case g >= 85 && g <=94:
        console.log('B');
        break;
        case g >= 70 && g <=84:
        console.log('C');
        break;
        case g >= 60 && g <=69:
        console.log('D');
        break;
        default:
        g >=0 && g <=49
        console.log('F')
        break
    }
}
grade (70)

// ex24
starter=0;
function counter(){
return starter++;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter())

function resetCounter(){
    starter=0;
    console.log (" the counter reset");
  }
  resetCounter();

  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());