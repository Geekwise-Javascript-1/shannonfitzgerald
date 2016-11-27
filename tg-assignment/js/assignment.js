var addItem = true;
var shoppingList = [];

while (addItem == true){
  var itm = prompt('Add an item');
  shoppingList.push(itm);
  var addItem = confirm('Item has been added. Do you want to add another item?');
}

console.log(shoppingList);

alert('Shopping List:' + '\n' + shoppingList.join('\n'));


// var addItem = confirm('Would you like to add an item?');
// var shoppingList = [];
//
// // console.log(addItem);
// if (addItem == true) {
//   var itmOne = prompt('Add an item');
//   shoppingList.push(itmOne);
//   var addMore = confirm('Item has been added. Do you want to add another item?');
//   addMoreItems();
// } else {
//   alert('Your shopping list is empty.');
// }
//
//
// function addMoreItems (){
// while (addMore == true){
//   var itm = prompt('Add another item');
//   shoppingList.push(itm);
//   var addMore = confirm('Item has been added. Do you want to add another item?');
// } }
//
// console.log(shoppingList);
//
// alert('Shopping List:' + '\n' + shoppingList.join('\n'));
