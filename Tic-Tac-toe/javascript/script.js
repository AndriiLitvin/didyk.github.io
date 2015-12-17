var obj = {
  zero: 0,
  krest: 0,
  section: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  winner: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}



square0.addEventListener('click', startSquare(0));
square1.addEventListener('click', startSquare1);
square2.addEventListener('click', startSquare2);

square3.addEventListener('click', startSquare3);
square4.addEventListener('click', startSquare4);
square5.addEventListener('click', startSquare5);

square6.addEventListener('click', startSquare6);
square7.addEventListener('click', startSquare7);
square8.addEventListener('click', startSquare8);



 function startSquare(N){
  var square = 'square' + N;
  if (obj.section[N] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[N]++;
      obj.winner[N] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");

      } else { 
      obj.zero++;
      obj.section[N]++;
      obj.winner[N] = 0;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
  };
}

function startSquare0(){
  var square = 'square0';
  if (obj.section[0] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[0]++;
      obj.winner[0] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");

      } else { 
      obj.zero++;
      obj.section[0]++;
      obj.winner[0] = 0;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
  };
}

function startSquare1(){
  var square = 'square1';
  if (obj.section[1] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[1]++;
      obj.winner[1] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[1]++;
      obj.winner[1] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
  };
}

function startSquare2(){
  var square = 'square2';
  if (obj.section[2] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[2]++;
      obj.winner[2] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[2]++;
      obj.winner[2] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
  };
}

function startSquare3(){
  var square = 'square3';
  if (obj.section[3] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[3]++;
      obj.winner[3] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[3]++;
      obj.winner[3] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
  };
}

function startSquare4(){
  var square = 'square4';
  if (obj.section[4] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[4]++;
      obj.winner[4] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[4]++;
      obj.winner[4] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
}
}

function startSquare5(){
  var square = 'square5';
  if (obj.section[5] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[5]++;
      obj.winner[5] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[5]++;
      obj.winner[5] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
}
}

function startSquare6(){
  var square = 'square6';
  if (obj.section[6] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[6]++;
      obj.winner[6] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[6]++;
      obj.winner[6] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
}
}

function startSquare7(){
  var square = 'square7';
  if (obj.section[7] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[7]++;
      obj.winner[7] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[7]++;
      obj.winner[7] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
}
}

function startSquare8(){
  var square = 'square8';
  if (obj.section[8] === 0) {
      if (obj.krest <= obj.zero) {
      obj.krest++;
      obj.section[8]++;
      obj.winner[8] = 1;
      removeClass(square, "zero");
      addClass(square, "krest");
      } else { 
      obj.zero++;
      obj.section[8]++;
      obj.winner[8] = 2;
      removeClass(square, "krest");
      addClass(square, "zero");
      };
  resetWinner();
}
}

function removeClass(element, nameClass){
  document.getElementById(element).classList.remove(nameClass);
}

function addClass(element, nameClass){
  document.getElementById(element).classList.add(nameClass);
}

function resetWinner(){
  if(winnerGame(obj.winner)){
  alert("Стоп");
}
}

function winnerGame(arr){
  if (arr[0] == arr[1] && arr[1] == arr[2] && arr[2] > 0) return true; 
  if (arr[3] == arr[4] && arr[4] == arr[5] && arr[5] > 0) return true;
  if (arr[6] == arr[7] && arr[7] == arr[8] && arr[8] > 0) return true;
  if (arr[6] == arr[3] && arr[3] == arr[0] && arr[0] > 0) return true;
  if (arr[7] == arr[4] && arr[4] == arr[1] && arr[1] > 0) return true;
  if (arr[8] == arr[5] && arr[5] == arr[2] && arr[2] > 0) return true;
  if (arr[6] == arr[4] && arr[4] == arr[2] && arr[2] > 0) return true;
  if (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] > 0) return true;
}
