var hero = {}; //empty hero object
hero.name = prompt('What is your name, hero?');

var monsters = [];
var monTypes = ['dragon','troll','ogre','wolf','homonculus','bat','orc']

console.log(hero);

moveNorth();
function moveNorth(){
  console.log('moving North');
}

moveEast();
function moveEast(){
  console.log('moving East');
}

moveSouth();
function moveSouth(){
  console.log('moving South');
}

moveWest();
function moveWest(){
  console.log('moving West');
}

var grid = function(x,y){
  console.log(x);
  console.log(y);
}
(Math.floor((Math.random() * 100) + 1),Math.floor((Math.random() * 100) + 1));

// var gameInit = {};
// gameStart();
//
//
// addEventListener('keypress', function(e){
//     console.log(e);
//     e.preventDefault();
//     if(e.charCode === 114){
//         gameReset();
//     }
// });
//
//
// function gameStart(){
//     if(!localStorage.getItem('gameInit')){
//         gameInit.name = prompt('What name doest thou answer to?');
//         gameInit.xy = parseInt(prompt('Choose a number between 5 & 10.'));
//         gameInit.lvl = 1;
//         localStorage.setItem( 'gameInit', JSON.stringify(gameInit) );
//     }else{
//         gameInit = JSON.parse( localStorage.getItem('gameInit') );
//     }
// }
//
// function gameReset(){
//     gameInit = {};
//     localStorage.removeItem('gameInit');
//     gameStart();
// }
//
// function gameWin(){
//     gameInit.xy++;
//     gameInit.lvl++;
//     localStorage.setItem( 'gameInit', JSON.stringify(gameInit) );
// }
//
//
// var grid = function(y, x){
//
// }(gameInit.xy, gameInit.xy);
