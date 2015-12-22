var date = new Date();
var timer;
var counter = 0;
var msecs = '000';
var secs = '00';
var minutes = '00';
var hours = '00';

startB.addEventListener('click', startTimer);
stopB.addEventListener('click', resetTimer);

function startTimer()
     {
   counter++;
   if (counter%2) {  
   if (timer) clearInterval(timer);

   timer = setInterval(
   function () {
   msecs++;
   // if (msecs < 10){
   //     msecs = '00' + msecs;
   //     };
   if (msecs < 100){
       msecs = '0' + msecs;
       };
   if (msecs == 200) {
       secs++;
       if (secs < 10){
       secs = '0' + secs;
       };
       msecs = '000';
       };
   if (secs == 60) {
       minutes++;
       if (minutes < 10){
       minutes = '0' + minutes;
       };
       secs = '00';
       };
       document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + secs + ':' + msecs;
     }, 5);
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
