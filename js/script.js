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
​
//matrix method
var turn = 1;
var win = -1;
var clickcounter = 0;
//var matrix = [[-1 - 1 - 1], [-1, -1, -1], [-1, -1, -1]];
var matrix = [[-1, - 1, - 1], [-1, -1, -1], [-1, -1, -1]];
​
const checkwin = (e, row, col) => { 
  document.getElementById(e.target.id).setAttribute('disabled',true);
  //if (e.innerHTML != "") return;
  //if (win != -1) return;
​
  clickcounter++;
console.log(matrix);
  matrix[row][col] = turn;
  if (turn == 1) {
    //e.innerHTML = "X";
    document.getElementById(e.target.id).innerHTML='X';
    document.getElementById("next-player").innerHTML = "Turn Played By: X";
    turn = 2;
  } else {
    //e.innerHTML = "O";
    document.getElementById(e.target.id).innerHTML='O';
    document.getElementById("next-player").innerHTML = "Turn Played By: O";
    turn = 1;
  }
​
  let p1flag=false;
  let p2flag=false;
​
   
  for (var i = 0; i < 3; i++) { // check for p1
    if(matrix[i][0]==1 && matrix[i][1]==1 && matrix[i][2]==1)  {// p1 rowcheck
      p1flag=true;
      win=1;
      console.log('p1 a ' +p1flag);
    }
    else if (matrix[0][i]==1 && matrix[1][i]==1 && matrix[2][i]==1) { // p1 col check
      p1flag=true;
      win=1;
      console.log('p1 b ' +p1flag);
    }     
    if(matrix[i][0]==2 && matrix[i][1]==2 && matrix[i][2]==2)  {// p2 row check
      p2flag=true;
      win=2;
      console.log('p2 a ' +p2flag);
    }
    else if (matrix[0][i]==2 && matrix[1][i]==2 && matrix[2][i]==2) { // p2 col check
      p2flag=true;
      win=2;
      console.log('p2 b ' +p2flag);
    }    
  }
  if (matrix[0][0]==1 && matrix[1][1]==1 && matrix[2][2]==1) {     // p1 diag check
    p1flag=true;
    win=1;
    console.log('p1 c ' +p1flag);
  }
  else if (matrix[0][0]==2 && matrix[1][1]==2 && matrix[2][2]==2) {     // p2 diag check
    p2flag=true;
    win=2;
    console.log('p2 c ' +p2flag);
  }
 
    // for (var i = 0; i < 3; i++) { // check for p2
    //   console.log('p2 loop' +matrix[i][0] + matrix[i][1] +matrix[i][2]);
    //   if(matrix[i][0]==matrix[i][1]==matrix[i][2]==2)  {
    //     p2flag=true;
    //     win=2;
    //     console.log('p2 a ' +p2flag);
    //   }
    //   else if (matrix[0][i]==matrix[1][i]==matrix[2][i]==2) {
    //     p2flag=true;
    //     win=2;
    //     console.log('p2 b ' +p2flag);
    //   } 
    //   else if (matrix[0][0]==matrix[1][1]==matrix[2][2]==2) {    
    //     p2flag=true;
    //     win=2;
    //     console.log('p2 c ' +p2flag);
    //   }
    // }
  
​
//    if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2])
  //    win = matrix[i][0];
    //col check
    // if (matrix[0][i] == matrix[1][i] && matrix[1][1] == matrix[2][i])
    //   win = matrix[0][i];
     
 //}
  // for (var i = 0; i < 3; i++) {
  //   //col check
  //   if (matrix[0][i] == matrix[1][i] && matrix[1][1] == matrix[2][i])
  //     win = matrix[0][i];
  // }
​
  //diagonal
  // if ((matrix[0][0] == matrix[1][1]) == matrix[2][2]) win = matrix[1][1];
  // if ((matrix[0][2] == matrix[1][1]) == matrix[2][0]) win = matrix[1][1];
​
  // if (win != -1) {
  //   alert("player" + win + "has won match");
  //   location.reload();
  // }
  if(p1flag==true || p2flag==true){
    alert("player" + win + "has won match");
    location.reload();
  }
  if (clickcounter == 9 && win == -1) {
    alert(" Match is draw");
    location.reload();
  }
};
