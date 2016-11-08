// alert('test');


// console.log(theDate.getDay());
// console.log(theDate.getMonth());
// console.log(theDate.getDate());
// console.log(theDate.getFullYear());



// var firstName = prompt('What is your first name?');
// var lastName = prompt('What is your last name?');
// var theDate = new Date( prompt('What is your birthday? (mm/dd/yyyy)') );
//
// alert(firstName+
//   ' '+
//   lastName+
//   '\'s birthday is '+
//   theDate.toLocaleString('us-en',{weekday:'long'})+
//   ', '+
//   theDate.toLocaleString('us-en',{month: 'long'})+
//   ' '+
//   theDate.getDate()+
//   ', '+
//   theDate.getFullYear()
// );

// String Object Manipulation
var firstname = prompt('Enter your first name');
// console.log(firstname.length);
// console.log(firstname.indexOf('a'));
// // index starts at 0, if it doesn't exist it will be -1
// console.log(firstname.charAt(0));
// console.log(firstname.charAt(firstname.length-1));
// index is 0, but when counting chars it starts with 1,2,3,ect.
var lastname = prompt('enter your last name');

var name = (firstname.concat(' ').concat(lastname));

// console.log(name.substring(0,firstname.length));
//
// console.log(firstname.toLowerCase());
// console.log(firstname.toUpperCase());
// console.log(firstname.trim());
// trims off spaces before and after text. but not between text
// alert(firstname.charAt(0).toUpperCase().concat(firstname.slice(1).toLowerCase()).concat(' ').concat(lastname.charAt(0).toUpperCase().concat(lastname.slice(1).toLowerCase())));

// OR

console.log(
  firstname.charAt(0).toUpperCase()+
  firstname.substring(1,firstname.length)+
  ' '+
  lastname.charAt(0).toUpperCase()+
  lastname.substring(1,lastname.length));

// IMPORTANT difference between substring and substr
console.log(firstname.substring(1,firstname.length-1));
// length = entire length of firstname
console.log(firstname.substr(1,firstname.length-1));
// length = length of firstname starting from given index (1 in this case)















//
