function myVeriablePow(){

var myVeriableNumber;
var myVeriableExponent;
var myVeriableResult;

myVeriableNumber = prompt('Enter a number');
myVeriableExponent = prompt('Enter a exponent');

myVeriableResult = Math.pow(myVeriableNumber, myVeriableExponent);
// alert (myVeriableResult);
console.log('Result = ', myVeriableResult);
}

myVeriablePow();
// ======================== 1 simple ends===================

var myVeriableArr = [];

for(var i = 0; i <= 4; i++){

myVeriableArr[i] = prompt('Enter ' + [i+1] + ' favorite names');
}

var myVeriableUsername = prompt('Enter a username');
var myVeriableError;


console.log('Arr = ', myVeriableArr);
console.log('Username = ', myVeriableUsername);

for (var i = 0; i < myVeriableArr.length; i++) {
  if (myVeriableUsername == myVeriableArr[i]) {
  	myVeriableError = 1;
  }
}
if (myVeriableError == 1) {
  alert(myVeriableUsername + ' you have successfully logged!');	
} else{
  	alert('Error!');
}
