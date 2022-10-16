var context = document.getElementById("puzzle");
var canvas = context.getContext("2d");


const timeOutMin = 5
const timeOutInSec = timeOutMin * 60 * 1000

var img = new Image();
img.src = './Solifi.png';
img.addEventListener('load', drawTiles, false);

var boardSize = document.getElementById('puzzle').width;
// var tileCount=3
var tileCount = document.getElementById('scale').value;

var tileSize = boardSize / tileCount;

var clickLoc = new Object;
clickLoc.x = 0;
clickLoc.y = 0;

var emptyLoc = new Object;
emptyLoc.x = 0;
emptyLoc.y = 0;

var boardParts = new Object;
setBoard();

function setBoard() {
  boardParts = new Array(tileCount);
  for (var i = 0; i < tileCount; ++i) {
    boardParts[i] = new Array(tileCount);
    for (var j = 0; j < tileCount; ++j) {
      boardParts[i][j] = new Object;
      boardParts[i][j].x = (tileCount - 1) - i;
      boardParts[i][j].y = (tileCount - 1) - j;
    }
  }
  emptyLoc.x = boardParts[tileCount - 1][tileCount - 1].x;
  emptyLoc.y = boardParts[tileCount - 1][tileCount - 1].y;
  solved = false;
}

var solved = false;

document.getElementById('scale').onchange = function () {
  tileCount = this.value;
  tileSize = boardSize / tileCount;
  setBoard();
  drawTiles();
};


document.getElementById('puzzle').onmousemove = function (e) {
  clickLoc.x = Math.floor((e.pageX - this.offsetLeft) / tileSize);
  clickLoc.y = Math.floor((e.pageY - this.offsetTop) / tileSize);
};

document.getElementById('puzzle').onclick = function () {
  if (distance(clickLoc.x, clickLoc.y, emptyLoc.x, emptyLoc.y) == 1) {
    slideTile(emptyLoc, clickLoc);
    drawTiles();
  }
  if (solved) {
    alert("You solved it!");
    document.write("<!DOCTYPE html>")
    document.write("<html lang='en'>")
    document.write("<head>")
    document.write("<meta charset='UTF-8'>")
    document.write("<meta http-equiv='X-UA-Compatible' content='IE=edge'>")
    document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>")
    document.write("<title>Hurray</title>")
    document.write("<link rel='stylesheet' href='index.css'>")
    document.write("</head>")
    document.write("<body>")
    document.write("<h1>Hurray...!!! You have nailed it. Eligible For Further rounds</h1>")


    document.write("<div id='rules'>")
    document.write("<h3>Rules to be Followed:</h3>")
    document.write("<ul>")
    document.write("<li>Further Rounds is conducted through Microsoft Teams Click the button in the page to continue</li>")
    document.write("<li>It is mandatory to turn ON the Camera</li>")
    document.write("<li>You have to show the objects prescribed by the host in the meet</li>")
    document.write("<li>There will be totally 8 tasks to complete</li>")
    document.write("<li>All players must be touching their computer before each round begins. This makes for a fair playing field.  For example, if a player is standing far from the webcam, they could reach an item faster than the others.</li>")
    document.write("<li>The host calls out the first item on the list and starts the preset countdown</li>")
    document.write("<li>The players must rush to find the item in their house or Office and bring it to the webcam before the timer runs out. </li>")
    document.write("<li>Once the countdown ends, all players must come back to the starting position, irrespective of if they found the item or not</li>")
    document.write("<li>The host then writes down the points won by each player, next to the item.</li>")
    document.write("<li>The first person to bring the item will be awarded 2pts and the second will be awarded with 1pt for each clue  </li>")
    document.write("<li>After completion of all the round based on the points earned winner will be decided</li>")
    document.write("</ul>")

    document.write("</div>")
    document.write("<a href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTIxNjQ4NTEtNWQ1MC00NWUxLWJmNjgtYjkzOWUwNTQ0NmZl%40thread.v2/0?context=%7b%22Tid%22%3a%2251db7917-f576-431e-9a40-b794a2469649%22%2c%22Oid%22%3a%220eb5d622-b785-43f0-8fb8-927d4b8e92f9%22%7d' target='_blank' rel='noopener noreferrer'><button id='btn'>Click Here</button></a>")
    document.write("</body>")
    document.write("</html>")


  }
};

if (!solved) {
  setTimeout(function () {
    alert("OOPS... Time Out!");
    document.write("<!DOCTYPE html>")
    document.write("<html lang='en'>")
    document.write("<head>")
    document.write("<meta charset='UTF-8'>")
    document.write("<meta http-equiv='X-UA-Compatible' content='IE=edge'>")
    document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>")
    document.write("<title>OOPS......</title>")
    document.write("<link rel='stylesheet' href='index.css'>")
    document.write("</head>")
    document.write("<body>")
    document.write("<h1>Better Luck Next Time</h1>")
    // document.write("<a href='https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTIxNjQ4NTEtNWQ1MC00NWUxLWJmNjgtYjkzOWUwNTQ0NmZl%40thread.v2/0?context=%7b%22Tid%22%3a%2251db7917-f576-431e-9a40-b794a2469649%22%2c%22Oid%22%3a%220eb5d622-b785-43f0-8fb8-927d4b8e92f9%22%7d' target='_blank' rel='noopener noreferrer'><button>Click Here</button></a>")
    document.write("</body>")
    document.write("</html>")

  }, timeOutInSec);
}

function distance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function slideTile(toLoc, fromLoc) {
  if (!solved) {
    boardParts[toLoc.x][toLoc.y].x = boardParts[fromLoc.x][fromLoc.y].x;
    boardParts[toLoc.x][toLoc.y].y = boardParts[fromLoc.x][fromLoc.y].y;
    boardParts[fromLoc.x][fromLoc.y].x = tileCount - 1;
    boardParts[fromLoc.x][fromLoc.y].y = tileCount - 1;
    toLoc.x = fromLoc.x;
    toLoc.y = fromLoc.y;
    checkSolved();
  }
}

function checkSolved() {
  var flag = true;
  for (var i = 0; i < tileCount; ++i) {
    for (var j = 0; j < tileCount; ++j) {
      if (boardParts[i][j].x != i || boardParts[i][j].y != j) {
        flag = false;
      }
    }
  }
  solved = flag;
}

function drawTiles() {
  canvas.clearRect(0, 0, boardSize, boardSize);
  for (var i = 0; i < tileCount; ++i) {
    for (var j = 0; j < tileCount; ++j) {
      var x = boardParts[i][j].x;
      var y = boardParts[i][j].y;
      if (i != emptyLoc.x || j != emptyLoc.y || solved == true) {
        canvas.drawImage(img, x * tileSize, y * tileSize, tileSize, tileSize,
          i * tileSize, j * tileSize, tileSize, tileSize);
      }
    }
  }
}
