var hero = { //empty hero object
    name: 'Lothar',
    hp: 15};
// hero.name = prompt('What is your name, hero?');

var monsters = [];
var monTypes = ['dragon','troll','basilisk','wolf','vampire','giant','zombie'];
var monster;
function Monster(name,hp){
  this.name = name,
  this.hp = hp
}

function generateMonsters(){
  var totMonsters = Math.round(Math.random() * 10);
  console.log('Total monsters: ' + totMonsters);

  for (var i = 0; i < totMonsters; i++) {
    monsters[i] = new Monster();
    monsters[i].name = monTypes[Math.floor(Math.random() * monTypes.length)];
    monsters[i].hp = Math.ceil(Math.random() * 10);
  }
console.log(monsters);
}
generateMonsters();

var tableHolder = document.getElementById('table');
var maze, cells, thisCell;

// console.log(hero);

var n = document.getElementById('n');
n.addEventListener('click',function(){
  moveNorth();
});

var e = document.getElementById('e');
e.addEventListener('click',function(){
  moveEast();
});

var s = document.getElementById('s');
s.addEventListener('click',function(){
  moveSouth();
});

var w = document.getElementById('w');
w.addEventListener('click',function(){
  moveWest();
});

function moveNorth(){
//  console.log('moving North');
  statusCell(thisCell,'inactive');
  thisCell = [thisCell[0]-1,thisCell[1]];
  statusCell(thisCell,'active');
  checkWalls();
  encounter();
}

function moveEast(){
//  console.log('moving East');
  statusCell(thisCell,'inactive');
  thisCell = [thisCell[0],thisCell[1]+1];
  statusCell(thisCell,'active');
  checkWalls();
  encounter();
}

function moveSouth(){
//  console.log('moving South');
  statusCell(thisCell,'inactive');
  thisCell = [thisCell[0]+1,thisCell[1]];
  statusCell(thisCell,'active');
  checkWalls();
  encounter();
}

function moveWest(){
//  console.log('moving West');
  statusCell(thisCell,'inactive');
  thisCell = [thisCell[0],thisCell[1]-1];
  statusCell(thisCell,'active');
  checkWalls();
  encounter();
}

addEventListener('keydown',function(evt){
//  console.log(evt);
  evt.preventDefault();
  if(evt.keyCode === 87  && !n.disabled || evt.keyCode === 38 && !n.disabled){
    moveNorth();
  }else if(evt.keyCode === 68  && !e.disabled || evt.keyCode === 39 && !e.disabled){
    moveEast();
  }else if(evt.keyCode === 83 || evt.keyCode === 40 && !s.disabled){
    moveSouth();
  }else if(evt.keyCode === 65 || evt.keyCode === 37 && !w.disabled){
    moveWest();
  }
});

var grid = function(y,x){
  var totalCells = y * x;
  cells = [];
  var visited = [];

  for(var i = 0; i < y; i++){
    cells[i] = [];
    visited[i] = [];

    for(var j = 0; j < x; j++){
      cells[i][j] = [0,0,0,0];
      visited[i][j] = false;
    }
  }

  var currentCell = [Math.floor(Math.random() * y),Math.floor(Math.random() * x)];
  var path = [currentCell];

  visited[currentCell[0]] [currentCell[1]] = true;

  var numOfVisited = 1;

  while(numOfVisited < totalCells){
    var possible = [
      [currentCell[0]-1,currentCell[1],0,2],
      [currentCell[0],currentCell[1]+1,1,3],
      [currentCell[0]+1,currentCell[1],2,0],
      [currentCell[0],currentCell[1]-1,3,1]
    ];

    var neighbors = [];

    for(var k = 0; k < 4; k++){
      if(
        possible[k][0] > -1 &&
        possible[k][0] < y &&
        possible[k][1] > -1 &&
        possible[k][1] < x &&
        !visited[possible[k][0]] [possible[k][1]]
      ){
        neighbors.push(possible[k]);
      }
    }
    if (neighbors.length){
      var next = neighbors[Math.floor(Math.random() * neighbors.length)];
      cells[currentCell[0]] [currentCell[1]] [next[2]] = 1;
      cells[next[0]] [next[1]] [next[3]] = 1;
      visited[next[0]] [next[1]] = true;

      numOfVisited++;
      currentCell = [next[0], next[1]];
      path.push(currentCell);
    }else{
      currentCell = path.pop();
    }
  }
  gridStart(path);
}(8,8);

function gridStart(path){
  gridBuilder();

  //console.log(path);
  thisCell = statusCell(path[0],'active');
  exitCell = statusCell(path[path.length - 1],'finish');
  checkWalls();
 // console.log(thisCell);
}

function statusCell(cell,status){
  if (maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.contains('exit')) {
    alert('Victory is yours!');
    location.reload();
  }
  switch(status){
    case 'active':
        maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('active');
        break;
    case 'inactive':
        maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.remove('active');
        maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('visited');
        break;
    case 'finish':
        maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('exit');
        break;
  }
  return cell;
}

function gridBuilder(){
  maze = document.createElement('table');
  tableHolder.appendChild(maze);

  for(var i = 0; i < cells.length; i++){
    maze.insertRow(i);

    for(var j = 0; j < cells[i].length; j++){
      maze.firstChild.childNodes[i].insertCell(j);
      thisCell = maze.firstChild.childNodes[i].childNodes[j];
      //console.log(thisCell);

      for(var k = 0; k < 4; k++){
        switch(k){
          case 0:
              cells[i][j][k] ?
              thisCell.classList.remove('bt'):
              thisCell.classList.add('bt');
              break;
          case 1:
              cells[i][j][k] ?
              thisCell.classList.remove('br'):
              thisCell.classList.add('br');
              break;
          case 2:
              cells[i][j][k] ?
              thisCell.classList.remove('bb'):
              thisCell.classList.add('bb');
              break;
          case 3:
              cells[i][j][k] ?
              thisCell.classList.remove('bl'):
              thisCell.classList.add('bl');
              break;
        }
      }
    }
  }
}

function checkWalls(){
  var walls = cells[thisCell[0]][thisCell[1]];
  //console.log(walls);
  for(var i = 0; i < 4; i++){
    switch(i){
      case 0:
        //  console.log(walls[i]);
          walls[i] ? n.disabled = false : n.disabled = true;
          break;
      case 1:
      //    console.log(walls[i]);
          walls[i] ? e.disabled = false : e.disabled = true;
          break;
      case 2:
        //  console.log(walls[i]);
          walls[i] ? s.disabled = false : s.disabled = true;
          break;
      case 3:
        //  console.log(walls[i]);
          walls[i] ? w.disabled = false : w.disabled = true;
          break;
    }
  }
}

function encounter(){
  console.log(monsters.length);
  console.log(cells.length);
  console.log(cells[0].length);

  var probEnc = Math.round(monsters.length / (cells.length * cells[0].length) * 100);
  console.log(probEnc + '% probabiity of encounter');

  var chancEnc = Math.ceil(Math.random() * 100);
  console.log('Chance of encounter: ' + chancEnc);

  if (chancEnc <= probEnc) {
      console.log('A monster appeared!');

      monster = monsters.splice(Math.floor(Math.random() * monsters.length),1)[0];
      console.log(monsters);
      alert('A ' + monster.name + ' appeared!');
      battle(monster);
  }
}

function battle(player){
  console.log(player);
  console.log(hero);

  var takingDamage;
  if (player.name === hero.name) {
      takingDamage = monster;
  }else {
    takingDamage = hero;
  }
  while (player.hp > 0 && takingDamage.hp > 0) {
    console.log(player.name + ' has ' + player.hp + ' health.');

    var hit = Math.ceil(player.hp / 3);
    takingDamage.hp -= hit;

    console.log(takingDamage.name + ' has taken ' + hit + ' damage.');
  }
}






















//
