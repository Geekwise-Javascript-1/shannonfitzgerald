var hero = {}; //empty hero object
// hero.name = prompt('What is your name, hero?');

var monsters = [];
var monTypes = ['dragon','troll','ogre','wolf','homonculus','bat','orc'];

var tableHolder = document.getElementById('table');
var maze, cells, thisCell;

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

var grid = function(y,x){
  console.log(x);
  console.log(y);

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

  var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x) ];
  console.log('The starting cell is: ' + currentCell + '\n\r---------------------\n\r');

  var path = [currentCell];
  console.log('path: ' + path);

  visited[ currentCell[0] ] [ currentCell[1] ] = true;

  var numOfVisited = 1;

  while(numOfVisited < totalCells){
    var possible = [
    /*north*/ [ currentCell[0]-1, currentCell[1], 0, 2 ],
    /*east*/  [ currentCell[0], currentCell[1]+1, 1, 3 ],
    /*south*/ [ currentCell[0]+1, currentCell[1], 2, 0 ],
    /*west*/  [ currentCell[0], currentCell[1]-1, 3, 1 ]
    ];

    var neighbors = [];
    console.log(' // Check all four directoins.');
    console.log(possible);
    console.log('\n\r// Of the four sides, does a cell exist in each direction?');

    for(var k = 0; k < 4; k++){
      if( possible[k][0] > -1 &&
          possible[k][0] < y &&
          possible[k][1] > -1 &&
          possible[k][1] < x &&
          !visited[ possible[k][0] ][ possible[k][1] ] ){
            neighbors.push( possible[k] );
          }
    }
    console.log(neighbors);
    // numOfVisited++;
    if(neighbors.length)/*checks if array contains something or is empty - !empty means true*/{
      var next = neighbors[Math.floor(Math.random() * neighbors.length)];
      console.log('\n\r// Of the available directions, randomly select one.\n\r// The selected cell to move to is: '+next+'\n\r');

      cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;
      console.log('cells[ currentCell[0] ] [ currentCell[1] ] [ +next[2] ]: cells['+currentCell[0]+'] ['+currentCell[1]+'] ['+next[2]+'] = 1');

      cells[next[0]][next[1]][next[3]] = 1;
      console.log('cells[next[0]][next[1]][next[3]]: cells['+next[0]+']['+next[1]+']['+next[3]+']');

      visited[next[0]] [next[1]] = true;
      console.log('visited [next[0]] [next[1]] : visited['+next[0]+']['+'next[1]'+'] = true');

      numOfVisited++;
      currentCell = [next[0], next[1]];
      console.log('\n\rcurrentCell: '+currentCell+'\n\r----------------------------');
      path.push(currentCell);
      console.log('');
    }else{
      currentCell = path.pop();
      console.log('\n\r//No neighbor found. currentCell: '+currentCell+'\n\r--------------------------\n\r');
    }
  }/*end while loop*/
  gridBuilder();
}(8,8);

function gridBuilder(){
  maze = document.createElement('table');
  tableHolder.appendChild(maze);

  for(var i = 0; i < cells.length; i++){
    maze.insertRow(i);

    for(var j = 0; j < cells[i].length; j++){
      console.log(maze);
      maze.firstChild.childNodes[i].insertCell(j);
      thisCell = maze.firstChild.childNodes[i].childNodes[j];

      for(var k = 0; k < 4; k++){
        switch (k) {
          case 0:
              cells[i] [j] [k] ? thisCell.classList.remove('bt') : thisCell.classList.add('bt');
              break;
          case 1:
              cells[i] [j] [k] ? thisCell.classList.remove('br') : thisCell.classList.add('br');
              break;
          case 2:
              cells[i] [j] [k] ? thisCell.classList.remove('bb') : thisCell.classList.add('bb');
              break;
          case 3:
              cells[i] [j] [k] ? thisCell.classList.remove('bl') : thisCell.classList.add('bl');
              break;
        }
      }
    }
  }
}
















// (Math.floor((Math.random() * 100) + 1),Math.floor((Math.random() * 100) + 1));
