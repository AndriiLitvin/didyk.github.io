var timer;
var counter = 0;
var msecs = '00';
var secs = '00';
var minutes = '00';

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
   if (msecs === 100) {
       secs++;
       msecs = '00';
       };
   if (secs === 60) {
       minutes++;
       secs = '00';
       };
       document.getElementById('timer').innerHTML = minutes + ':' + secs + ':' + msecs;
     },
     10);
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
     document.getElementById('timer').innerHTML = '00:00:00';
     document.getElementById('startB').innerHTML = 'Старт';
     }