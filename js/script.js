// button click handler
// flag = 1;
// const b1 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-1").innerHTML = "X";
//     document.getElementById("box-1").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-1").innerHTML = "O";
//     document.getElementById("box-1").style.color = "blue";
//     document.getElementById("box-1").disabled = true;
//     flag = 1;
//   }
// };
// const b2 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-2").innerHTML = "X";
//     document.getElementById("box-2").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-2").innerHTML = "O";
//     document.getElementById("box-2").style.color = "blue";
//     document.getElementById("box-2").disabled = true;
//     flag = 1;
//   }
// };
// const b3 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-3").innerHTML = "X";
//     document.getElementById("box-3").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-3").innerHTML = "O";
//     document.getElementById("box-3").style.color = "blue";
//     document.getElementById("box-3").disabled = true;
//     flag = 1;
//   }
// };
// const b4 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-4").innerHTML = "X";
//     document.getElementById("box-4").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-4").innerHTML = "O";
//     document.getElementById("box-4").style.color = "blue";
//     document.getElementById("box-4").disabled = true;
//     flag = 1;
//   }
// };
// const b5 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-5").innerHTML = "X";
//     document.getElementById("box-5").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-5").innerHTML = "O";
//     document.getElementById("box-5").style.color = "blue";
//     document.getElementById("box-5").disabled = true;
//     flag = 1;
//   }
// };
// const b6 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-6").innerHTML = "X";
//     document.getElementById("box-6").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-6").innerHTML = "O";
//     document.getElementById("box-6").style.color = "blue";
//     document.getElementById("box-6").disabled = true;
//     flag = 1;
//   }
// };
// const b7 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-7").innerHTML = "X";
//     document.getElementById("box-7").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-7").innerHTML = "O";
//     document.getElementById("box-7").style.color = "blue";
//     document.getElementById("box-7").disabled = true;
//     flag = 1;
//   }
// };
// const b8 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-8").innerHTML = "X";
//     document.getElementById("box-8").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-8").innerHTML = "O";
//     document.getElementById("box-8").style.color = "blue";
//     document.getElementById("box-8").disabled = true;
//     flag = 1;
//   }
// };
// const b9 = (event) => {
//   event.preventDefault();
//   f1();
//   if (flag == 1) {
//     document.getElementById("box-9").innerHTML = "X";
//     document.getElementById("box-9").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("box-9").innerHTML = "O";
//     document.getElementById("box-9").style.color = "blue";
//     document.getElementById("box-9").disabled = true;
//     flag = 1;
//   }
// };

//apply event to generate new game state

// game state renderer renders the generated game state

// renders text on button clicked with X or O

// disable the button clicked

// update panel values such as Turn Played By and Moves Left
// function f1() {
//   if (flag == 1) {
//     document.getElementById("next-player").innerHTML = "Turn Played By: X";
//   } else {
//     document.getElementById("next-player").innerHTML = "Turn Played By: O";
//   }
// }

// reset panel values to default values

// implement logic to get the winner
// const combos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2],
// ];

// let ply1 = [3][3];
// let ply2 = [3][3];
// function checkWinner() {
//   for (i = 0; i < ply1.length; i++) {
//     for (j = 1; j < ply2.length; j++) {
//       if (
//         (ply1[0] == "1" && ply1[4] == "1" && ply1[8] == "1") ||
//         (ply1[0] == "1" && ply1[3] == "1" && ply1[6] == "1")
//       ) {
//         console.log("player1 win");
//       }
//     }
//   }
// }

// announce winner

// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state

// reset game to start a new

// bind events to clickable buttons
// button click handler

//apply event to generate new game state

// game state renderer renders the generated game state

// renders text on button clicked with X or O

// disable the button clicked

// update panel values such as Turn Played By and Moves Left

// reset panel values to default values
const fnreset = (event) => {
  event.preventDefault();
  location.reload();
  document.getElementById("box-1").value = "";
  document.getElementById("box-2").value = "";
  document.getElementById("box-3").value = "";
  document.getElementById("box-4").value = "";
  document.getElementById("box-5").value = "";
  document.getElementById("box-6").value = "";
  document.getElementById("box-7").value = "";
  document.getElementById("box-8").value = "";
  document.getElementById("box-9").value = "";
};

// implement logic to get the winner

// announce winner

// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state

// reset game to start a new

// bind events to clickable buttons

//matrix method
var turn = 1;
var win = -1;
var clickcounter = 0;
var matrix = [[-1 - 1 - 1], [-1, -1, -1], [-1, -1, -1]];

const checkwin = (e, row, col) => {
  if (e.innerHTML != "") return;
  if (win != -1) return;

  clickcounter++;

  matrix[row][col] = turn;
  if (turn == 1) {
    e.innerHTML = "X";
    document.getElementById("next-player").innerHTML = "Turn Played By: X";
    turn = 2;
  } else {
    e.innerHTML = "O";
    document.getElementById("next-player").innerHTML = "Turn Played By: O";
    turn = 1;
  }
  for (var i = 0; i < 3; i++) {
    //row check
    if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2])
      win = matrix[i][0];
    //col check
    // if (matrix[0][i] == matrix[1][i] && matrix[1][1] == matrix[2][i])
    //   win = matrix[0][i];
  }
  for (var i = 0; i < 3; i++) {
    //col check
    if (matrix[0][i] == matrix[1][i] && matrix[1][1] == matrix[2][i])
      win = matrix[0][i];
  }

  //diagonal
  if ((matrix[0][0] == matrix[1][1]) == matrix[2][2]) win = matrix[1][1];
  if ((matrix[0][2] == matrix[1][1]) == matrix[2][0]) win = matrix[1][1];

  if (win != -1) {
    alert("player" + win + "has won match");
  }
  if (clickcounter == 9 && win == -1) {
    alert(" Match is draw");
  }
};
