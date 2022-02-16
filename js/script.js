//matrix method
var turn = 1;
var win = -1;
var clickcounter = 0;

var matrix = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

const checkwin = (e, row, col) => {
  document.getElementById(e.target.id).setAttribute("disabled", true);

  clickcounter++;
  console.log(matrix);
  matrix[row][col] = turn;
  if (turn == 1) {
    document.getElementById(e.target.id).innerHTML = "X";
    document.getElementById("next-player").innerHTML = "Turn Played By: X";
    turn = 2;
  } else {
    document.getElementById(e.target.id).innerHTML = "O";
    document.getElementById("next-player").innerHTML = "Turn Played By: O";
    turn = 1;
  }

  let p1flag = false;
  let p2flag = false;

  for (var i = 0; i < 3; i++) {
    // check for p1
    if (matrix[i][0] == 1 && matrix[i][1] == 1 && matrix[i][2] == 1) {
      // p1 rowcheck
      p1flag = true;
      win = 1;
      console.log("p1 a " + p1flag);
    } else if (matrix[0][i] == 1 && matrix[1][i] == 1 && matrix[2][i] == 1) {
      // p1 col check
      p1flag = true;
      win = 1;
      console.log("p1 b " + p1flag);
    }
    if (matrix[i][0] == 2 && matrix[i][1] == 2 && matrix[i][2] == 2) {
      // p2 row check
      p2flag = true;
      win = 2;
      console.log("p2 a " + p2flag);
    } else if (matrix[0][i] == 2 && matrix[1][i] == 2 && matrix[2][i] == 2) {
      // p2 col check
      p2flag = true;
      win = 2;
      console.log("p2 b " + p2flag);
    }
  }
  if (matrix[0][0] == 1 && matrix[1][1] == 1 && matrix[2][2] == 1) {
    // p1 diag check
    p1flag = true;
    win = 1;
    console.log("p1 c " + p1flag);
  } else if (matrix[0][0] == 2 && matrix[1][1] == 2 && matrix[2][2] == 2) {
    // p2 diag check
    p2flag = true;
    win = 2;
    console.log("p2 c " + p2flag);
  }

  if (p1flag == true || p2flag == true) {
    alert("player" + win + "has won match");
    location.reload();
  }
  if (clickcounter == 9 && win == -1) {
    alert(" Match is draw");
    location.reload();
  }
};
