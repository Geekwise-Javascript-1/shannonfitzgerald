// iteration 1
// var todo = [];
//
// todo.push(prompt('what is the first item on your to do list?'));
// for(var moreTodo = true; moreTodo;){
//   if(confirm('Any more items?') ){
//     addTodoItem();
//   }else{
//     moreTodo = false;
//     printTodoList();
//   }
// }
//
// function addTodoItem() {
//   todo.push(prompt('what is the next item?'));
// }
//
// function printTodoList() {
//   var msg = '';
//   for(var i = 0; i < todo.length; i++){
//     msg += ' - ' + todo[i] + '\n';
//     // += will add msg to beginning of first item only each time loop runs
//   }
//   alert('My list of items to purchase: \n' + msg);
// }

// iteration 2
/*(function(){
  var createTodoList = function(){
    var todo = [];
    todo.push(prompt('what is the first item on your to do list?'));
    for(var moreTodo = true; moreTodo;){
      if(confirm('Any more items?') ){
        addTodoItem();
      }else{
        moreTodo = false;
        printTodoList();
      }
    }
  }();

  function addTodoItem(todoArray) {
    todoArray.push(prompt('what is the next item?'));
  }

  function printTodoList(todoArray) {
    var msg = '';
    for(var i = 0; i < todo.length; i++){
      msg += ' - ' + todo[i] + '\n';
      // += will add msg to beginning of first item only each time loop runs
    }
    alert('My list of items to purchase: \n' + msg);
  }
} )();

*/

// Iteration 3
var todo = [];
var item = prompt('Enter your first item');

/*
esc = null
cancel = null
enter = ''
ok = ''
spaces
spaces before/after entry
numbers
*/

(function(){

if(isValid(item) ){
  addTodo(item);
  checkIfMore();
}


function isValid(item){
  if(item !== null){
      if(item.trim() !== '' && !parseInt(item) ){
          console.log(parseInt (item));
          return true;
      }else{
        alert('Invalid input');
        return false;
      }
  }else{
    alert('Invalid input');
    return false;
  }
}


function addTodo(item){
  todo.push(item);
}

function checkIfMore(){
  for(var moreTodo = true; moreTodo;){
    if(confirm('Want to add more?')){
      askMore();
    }else{
      moreTodo = false;
      craftMsg();
    }
  }
}

function askMore(){
  var item = prompt('Enter another item');
  if(isValid(item)){
    addTodo(item);
  }
}

function craftMsg(){
  var msg = '';
  for (var i = 0; i < todo.length; i++){
    msg += ' -' + todo[i].trim() + '\n';
  }
  alert('My list:' + msg);
}
}());







//
