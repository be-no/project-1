document.body.style.backgroundImage = "url('nasa.jpg')"; //space background

//create a 9x9 square board using vanilla DOM
const board = document.getElementById("board");
const size = 9; //set 9 as standard number for board

  for (i=0; i<size; i++) {
    row = document.createElement("tr"); // board[i] = []; creates 9 rows
    for (j=0; j<size; j++) {
      cell = document.createElement("td"); // board[i][j] = 0; creates 9 cells in each row
      row.appendChild(cell);
    }
  board.appendChild(row); // return board
  }

// randomly assign 10 cells to have a BH
const blackholes = 10; //set 10 as standard number of BH
cells = document.querySelectorAll("td"); //board[i][j]

for(i=0; i<blackholes; i++) {
    //note the cell that has not had a BH to contain a BH
    const randomIndex = Math.floor(Math.random() * cells.length)
    if(cells[randomIndex].innerText !== '@') { //using '@' as the BH sign because it could look like a BH
      cells[randomIndex].innerText = '@';
    } else {
      i--;
    }
}

// put number of BH around the cell in the selected cell
if(cells[0].innerText !== '@') { //corner cells
  let clues = 0;
  if(cells[0+1].innerText === '@') {
    clues++;
  }
  if(cells[0+9].innerText === '@') {
      clues++;
  }
  if(cells[0+10].innerText === '@') {
    clues++;
  }
  cells[0].innerText = clues;
}

if(cells[72].innerText !== '@') {
  let clues = 0;
  if(cells[72-9].innerText === '@') {
    clues++;
  }
  if(cells[72-8].innerText === '@') {
      clues++;
  }
  if(cells[72+1].innerText === '@') {
    clues++;
  }
  cells[72].innerText = clues;
}

if(cells[8].innerText !== '@') {
  let clues = 0;
  if(cells[8-1].innerText === '@') {
    clues++;
  }
  if(cells[8+8].innerText === '@') {
      clues++;
  }
  if(cells[8+9].innerText === '@') {
    clues++;
  }
  cells[8].innerText = clues;
}

if(cells[80].innerText !== '@') {
  let clues = 0;
  if(cells[80-1].innerText === '@') {
    clues++;
  }
  if(cells[80-9].innerText === '@') {
      clues++;
  }
  if(cells[80-10].innerText === '@') {
    clues++;
  }
  cells[80].innerText = clues;
}

for(i=0; i<cells.length; i+=9) { //vertical edge cells
  if(i !== 0 && i !== 72 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

for(i=8; i<cells.length; i+=9) {
  if(i !== 8 && i !== 80 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

if(cells[1].innerText !== '@') { //horizontal edge cells
  let clues = 0;
  if(cells[1-1].innerText === '@') {
    clues++;
  }
  if(cells[1+1].innerText === '@') {
      clues++;
  }
  if(cells[1+8].innerText === '@') {
    clues++;
  }
  if(cells[1+9].innerText === '@') {
    clues++;
  }
  if(cells[1+10].innerText === '@') {
    clues++;
  }
  cells[1].innerText = clues;
}

if(cells[2].innerText !== '@') {
  let clues = 0;
  if(cells[2-1].innerText === '@') {
    clues++;
  }
  if(cells[2+1].innerText === '@') {
      clues++;
  }
  if(cells[2+8].innerText === '@') {
    clues++;
  }
  if(cells[2+9].innerText === '@') {
    clues++;
  }
  if(cells[2+10].innerText === '@') {
    clues++;
  }
  cells[2].innerText = clues;
}

if(cells[3].innerText !== '@') {
  let clues = 0;
  if(cells[3-1].innerText === '@') {
    clues++;
  }
  if(cells[3+1].innerText === '@') {
      clues++;
  }
  if(cells[3+8].innerText === '@') {
    clues++;
  }
  if(cells[3+9].innerText === '@') {
    clues++;
  }
  if(cells[3+10].innerText === '@') {
    clues++;
  }
  cells[3].innerText = clues;
}

if(cells[4].innerText !== '@') {
  let clues = 0;
  if(cells[4-1].innerText === '@') {
    clues++;
  }
  if(cells[4+1].innerText === '@') {
      clues++;
  }
  if(cells[4+8].innerText === '@') {
    clues++;
  }
  if(cells[4+9].innerText === '@') {
    clues++;
  }
  if(cells[4+10].innerText === '@') {
    clues++;
  }
  cells[4].innerText = clues;
}

if(cells[5].innerText !== '@') {
  let clues = 0;
  if(cells[5-1].innerText === '@') {
    clues++;
  }
  if(cells[5+1].innerText === '@') {
      clues++;
  }
  if(cells[5+8].innerText === '@') {
    clues++;
  }
  if(cells[5+9].innerText === '@') {
    clues++;
  }
  if(cells[5+10].innerText === '@') {
    clues++;
  }
  cells[5].innerText = clues;
}

if(cells[6].innerText !== '@') {
  let clues = 0;
  if(cells[6-1].innerText === '@') {
    clues++;
  }
  if(cells[6+1].innerText === '@') {
      clues++;
  }
  if(cells[6+8].innerText === '@') {
    clues++;
  }
  if(cells[6+9].innerText === '@') {
    clues++;
  }
  if(cells[6+10].innerText === '@') {
    clues++;
  }
  cells[6].innerText = clues;
}

if(cells[7].innerText !== '@') {
  let clues = 0;
  if(cells[7-1].innerText === '@') {
    clues++;
  }
  if(cells[7+1].innerText === '@') {
      clues++;
  }
  if(cells[7+8].innerText === '@') {
    clues++;
  }
  if(cells[7+9].innerText === '@') {
    clues++;
  }
  if(cells[7+10].innerText === '@') {
    clues++;
  }
  cells[7].innerText = clues;
}

if(cells[73].innerText !== '@') {
  let clues = 0;
  if(cells[73-10].innerText === '@') {
    clues++;
  }
  if(cells[73-9].innerText === '@') {
      clues++;
  }
  if(cells[73-8].innerText === '@') {
    clues++;
  }
  if(cells[73-1].innerText === '@') {
    clues++;
  }
  if(cells[73+1].innerText === '@') {
    clues++;
  }
  cells[73].innerText = clues;
}

if(cells[74].innerText !== '@') {
  let clues = 0;
  if(cells[74-10].innerText === '@') {
    clues++;
  }
  if(cells[74-9].innerText === '@') {
      clues++;
  }
  if(cells[74-8].innerText === '@') {
    clues++;
  }
  if(cells[74-1].innerText === '@') {
    clues++;
  }
  if(cells[74+1].innerText === '@') {
    clues++;
  }
  cells[74].innerText = clues;
}

if(cells[75].innerText !== '@') {
  let clues = 0;
  if(cells[75-10].innerText === '@') {
    clues++;
  }
  if(cells[75-9].innerText === '@') {
      clues++;
  }
  if(cells[75-8].innerText === '@') {
    clues++;
  }
  if(cells[75-1].innerText === '@') {
    clues++;
  }
  if(cells[75+1].innerText === '@') {
    clues++;
  }
  cells[75].innerText = clues;
}

if(cells[76].innerText !== '@') {
  let clues = 0;
  if(cells[76-10].innerText === '@') {
    clues++;
  }
  if(cells[76-9].innerText === '@') {
      clues++;
  }
  if(cells[76-8].innerText === '@') {
    clues++;
  }
  if(cells[76-1].innerText === '@') {
    clues++;
  }
  if(cells[76+1].innerText === '@') {
    clues++;
  }
  cells[76].innerText = clues;
}

if(cells[77].innerText !== '@') {
  let clues = 0;
  if(cells[77-10].innerText === '@') {
    clues++;
  }
  if(cells[77-9].innerText === '@') {
      clues++;
  }
  if(cells[77-8].innerText === '@') {
    clues++;
  }
  if(cells[77-1].innerText === '@') {
    clues++;
  }
  if(cells[77+1].innerText === '@') {
    clues++;
  }
  cells[77].innerText = clues;
}

if(cells[78].innerText !== '@') {
  let clues = 0;
  if(cells[78-10].innerText === '@') {
    clues++;
  }
  if(cells[78-9].innerText === '@') {
      clues++;
  }
  if(cells[78-8].innerText === '@') {
    clues++;
  }
  if(cells[78-1].innerText === '@') {
    clues++;
  }
  if(cells[78+1].innerText === '@') {
    clues++;
  }
  cells[78].innerText = clues;
}

if(cells[79].innerText !== '@') {
  let clues = 0;
  if(cells[79-10].innerText === '@') {
    clues++;
  }
  if(cells[79-9].innerText === '@') {
      clues++;
  }
  if(cells[79-8].innerText === '@') {
    clues++;
  }
  if(cells[79-1].innerText === '@') {
    clues++;
  }
  if(cells[79+1].innerText === '@') {
    clues++;
  }
  cells[79].innerText = clues;
}

for(i=1; i<cells.length; i+=9) {//middle cells
  if(i !== 1 && i !== 73 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

for(i=2; i<cells.length; i+=9) {
  if(i !== 2 && i !== 74 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

for(i=3; i<cells.length; i+=9) {
  if(i !== 3 && i !== 75 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

for(i=4; i<cells.length; i+=9) {
  if(i !== 4 && i !== 76 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

for(i=5; i<cells.length; i+=9) {
  if(i !== 5 && i !== 77 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

for(i=6; i<cells.length; i+=9) {
  if(i !== 6 && i !== 78 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

for(i=7; i<cells.length; i+=9) {
  if(i !== 7 && i !== 79 && cells[i].innerText !== '@') {
    let clues = 0;
    if(cells[i-10].innerText === '@') {
      clues++;
    }
    if(cells[i-9].innerText === '@') {
      clues++;
    }
    if(cells[i-8].innerText === '@') {
        clues++;
    }
    if(cells[i-1].innerText === '@') {
      clues++;
    }
    if(cells[i+1].innerText === '@') {
      clues++;
    }
    if(cells[i+8].innerText === '@') {
      clues++;
    }
    if(cells[i+9].innerText === '@') {
      clues++;
    }
    if(cells[i+10].innerText === '@') {
      clues++;
    }
    cells[i].innerText = clues;
  }
}

// how to let user win game ? go through all cells and count how many have '@'
let bhCount = 0;
for (i=0; i<cells.length; i++) {
  if (cells[i].innerText === '@') {
    bhCount++;
  }
}
const bhDisplay = document.getElementById("bh");
bhDisplay.innerText = "Blackholes: "+bhCount; //display number of blackholes

let countClicks = 0;
let clickCell = true;
for (i=0; i<cells.length; i++) {
  (function(i) {
    cells[i].addEventListener("click", function() {
      if(clickCell) {
        countClicks++;
        cells[i].style.backgroundColor = "rebeccapurple"
        if(cells[i].innerText === '@') { // if user presses on a '@', stop the game
          document.getElementById("output").innerText = "You're in the Blackhole! Hit Restart to try again.";
          clickCell = false;
        }
        if(countClicks === (cells.length-bhCount)) {
          clickCell = false;
          document.getElementById("output").innerText = "You beat the nebula! Victory is yours!"; //if user clicks === number of regular cells, victory!
        }
      }
    });
  })(i);

  restart.addEventListener("click", function() { //reloads the page when user restarts
    location.reload();
  })
}

