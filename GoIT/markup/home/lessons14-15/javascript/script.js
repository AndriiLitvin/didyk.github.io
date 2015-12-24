var date = new Date(0, 0);
var timer;
var counter = 0;
var msecs = 0;
var secs = "00";
var minutes = "00";
var hours = "00";

var domElements = {

   domElementsCreate: function(params) {
      var element = document.createElement(params.tagName);
      if (params.inputType){
      element.setAttribute('type', params.inputType);
      }
      if(params.className){
        element.className = params.className;
      }
      if(params.id){
        element.id = params.id;
      }
      if(params.content){
        element.innerHTML = params.content;
      }
      if(params.parentElement){
        params.parentElement.appendChild(element);
      }
      return element;
   }
}

var mainDivHTML = document.querySelector('.main');
domElements.domElementsCreate({
  tagName: 'div',
  className: 'button button__timer',
  id: 'timer',
  content: '00:00:00:000',
  parentElement: mainDivHTML
});

domElements.domElementsCreate({
  tagName: 'div',
  className: 'button button__start',
  id: 'startB',
  content: 'Старт',
  parentElement: mainDivHTML
});

domElements.domElementsCreate({
  tagName: 'div',
  className: 'button button__reset',
  id: 'stopB',
  content: 'Очистить',
  parentElement: mainDivHTML
});

startB.addEventListener('click', startTimer);
stopB.addEventListener('click', resetTimer);

function startTimer()
     {
   counter++;
   if (counter%2) {  
   if (timer) clearInterval(timer);

   timer = setInterval(
   function () {
    date.setMilliseconds( date.getMilliseconds() + 4);
    var msecs = date.getMilliseconds();
    // msecs += 5;
   // if (msecs < 10){
   //     msecs = 0 + msecs;
   //     };
   // if (msecs < 100){
   //     msecs = msecs;
   //     };
   if (msecs == 996) {
       secs++;
       if (secs < 10){
       secs = "0" + secs;
       };
       msecs = 0;
       };
   if (secs == 60) {
       minutes++;
       if (minutes < 10){
       minutes = "0" + minutes;
       };
       secs = '00';
       };
       document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + secs + ':' + msecs;
     }, 4);
       document.getElementById('startB').innerHTML = 'Пауза';
     } else {
       window.clearInterval(timer);
       document.getElementById('startB').innerHTML = 'Старт';
     };
     };

function resetTimer()
     {     
     if (timer) clearInterval(timer);  
     msecs = 0;
     secs = 0;
     minutes = 0;
     var hours = 0;
     document.getElementById('timer').innerHTML = '00:00:00:000';
     document.getElementById('startB').innerHTML = 'Старт';
     }
