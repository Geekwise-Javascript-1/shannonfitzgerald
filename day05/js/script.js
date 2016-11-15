


// IIFE  Immediately Invoked Function Expression

// (function (){
//   var firstName = 'shannon';
//   var middleName = 'lee';
//   var lastName = 'fitzgerald';
// }() );
//
//
// function getNums(){
//   var a = parseInt(prompt('pick a number'));
//   var b = parseInt(prompt('pick another number'));
//   console.log(doMath(a,b));
// }
//
// function doMath(num1,num2){
//   return num1 + num2;
// }
//
// getNums();

// return statements are always last - nothing will happen after return statement


// function dec(mov){
//   var msg = 'My favorite movie is ';
//   alert(msg + mov);
// }
//
// dec('indiana jones');
//
// var exp = function(){
//   var favMov = prompt('what is your fave movie');
//   dec(favMov);
// }();
//
// function one(){
//   alert('one');
// }
//
// var two = function(){
//   alert('two');
// };


// Loops

// var fruits = ['apple','orange','plum','pineapple','grape','lemon'];
//
// for(var i = 0; i< fruits.length; i++){
//   console.log(fruits[i]);
// }

var monsters = ['ogre','orc','troll','wolf','vampire'];
//
var strength = [5,4,3,2,1];
//
// for(var j = 0; j < monsters.length; j++){
//   console.log(monsters[j] + ' has a strength of ' + strength[j] + ' points');
// }

// WHILE

var text = '';
var i = 0;
while( i < monsters.length ){
  console.log(monsters[i] + ' has a strength of ' + strength[i] + ' points');
  i++;
}
















//
