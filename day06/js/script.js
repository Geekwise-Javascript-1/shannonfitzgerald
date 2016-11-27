// var fruits = ['apple', 'pear', 'peach', 'plum'];
// console.log(fruits);
// console.log(fruits.length);

// // PUSH
// // adds items to end of array
// fruits.push( 'pineapple');
// console.log(fruits);
//
// // JOIN
// // change separators/delimiters of array
// var xyz = fruits.join( '+' );
// console.log(xyz);
//
// // POP
// // removes last item from string
// fruits.pop();
// console.log(fruits);
//
// // UNSHIFT
// // adds item to beginning of array
// fruits.unshift('mango');
// console.log(fruits);
//
// // SHIFT
// // removes item from beginning of array
// // fruits.shift();
// console.log(fruits);
//
// // REVERSE
// // reverses order of array
// // fruits.reverse();
// console.log(fruits);
//
// // SORT
// // sort array a-z
// // fruits.sort();
// console.log(fruits);

// with numbers it will sort ascending by only the first digit
// var num = [5,10,15,20,25];
// num.sort();
// console.log(num);
//
// var a = ['a',2,1,'A','And','and'];
// a.sort();
// console.log(a);

// SPLICE
// always alters original array. do not assign a var or it will do weird stuff
// adds and items to array at designated point
// fruits.splice(x,y,str)
// x = index where you want the new items to start
// y = how many items to remove
// str = what to add (optional)
// fruits.splice(2,1,'kiwi');
// console.log(fruits);

// SLICE
// never alters original array. use with a var or your changes won't be saved anywhere
// slice(x,y);
// x = begin index
// y = end index
// var myFruits = fruits.slice(1,3);
// console.log(myFruits);
//
// fruits.slice(1,3);
// console.log(fruits);


// IF STATEMENTS
// if(thing = true){
//   do the thing;
// }
// else{
//  do the other thing;
// }

// != means 'not'  4 != 5
// !false = true (not false)
// !true = false (not true)
// !! = double negative
// !!false = false (not not true)
// !!true = true (not not true)


// if(door = red){
//   door.paint(black);
// }


// var userResp = prompt('what color is the door?');
//
// if( userResp != 'red' ){
//   alert(userResp + ' is ok');
// }else{
//   alert('paint it black');
// }


// var myPet = prompt('what kind of pet do you have?');
//
// if(myPet == 'cat'){
//   alert('meow');
// }else if (myPet == 'dog') {
//   alert('woof');
// }else{
//   alert('things and stuff');
// }
// && means 'equals, and...' to check for two conditions at same time

// var randNum = Math.floor(Math.random() * 11);
// console.log(randNum);
// var userGuess = parseInt(prompt('pick a number between 0 and 10'));
//
// if (userGuess == randNum){
//   alert('you got it right');
// }else if (userGuess < randNum && userGuess > 0) {
//   alert('sorry...too low');
// }else if (userGuess > randNum) {
//   alert('sorry...too high');
// }
var userName = prompt('what is your name?');
var gender = prompt('what is your gender');
var iceCream = prompt('do you like ice cream');

if(gender == 'male' && iceCream == 'yes'){
  alert(userName + ' is a cool dude');
}else if (gender == 'male' && iceCream == 'no') {
  alert(userName + ' is a hot dude');
}else if (gender == 'female' && iceCream =='yes') {
  alert(userName + ' is a cool chick');
}else if (gender == 'female' && iceCream == 'no') {
  alert(userName + ' is a hot chick');
}else{
  alert(userName + ' is an alien?');
}



// enter first to to item
// want to add another item?
// add another item
// want to add another item?
// add another item...etc...
//
// My list of items to purchase:
// [item1, item2, item3 etc.]

// capture user input
// create array
// do you want to add more?
// no? alert all items
// yes? add to array
//
// edge casing: (dealing with unexpected inputs)
// ecape key
// cancel button
// okay button
// enter key
// are they numbers
// is it blank
// are there spaces

// use functions to repeat actions










//
