var myVeriableNumber = +prompt('Введите число, которое будем возводить в степень');
var myVeriableExponent = +prompt('Введите степень, в которую будем возводить');


function pow(base, exponent) {
  var myVeriableResult = 1;

  for (var i = 0; i < exponent; i++) {
    myVeriableResult = myVeriableResult * base;
  }

  return myVeriableResult;
}

var myVeriablePowResult = pow(myVeriableNumber, myVeriableExponent);

console.log(myVeriablePowResult);
// ======================== 1 simple ends===================

var myVeriableArr = [];

for(var i = 0; i <= 4; i++){
myVeriableArr[i] = prompt('Enter ' + [i+1] + ' favorite names');
  if (myVeriableArr[i] === null){
        alert('Вы отменили!!'); 
        myVeriableArr = []
        break;
  } else if(myVeriableArr[i] === ""){
        alert('Введите имя!!'); 
        myVeriableArr = []
        break;
  }
}

var myVeriableUsername = prompt('Enter a username');
var myVeriableError;


console.log('Arr = ', myVeriableArr);
console.log('Username = ', myVeriableUsername);

for (var i = 0; i < myVeriableArr.length; i++) {
  if (myVeriableUsername === myVeriableArr[i]) {
  	myVeriableError = 1;
  	break;
  }
}
if (myVeriableError === 1) {
  alert(myVeriableUsername + ' you have successfully logged!');	
} else{
  	alert('Ошибка, вы ввели не правильное имя или пропустили строку при вводе');
}
// ======================== 2 simple ends===================
