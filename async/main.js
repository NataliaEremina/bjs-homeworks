'use strict';

function setDailyRhythm(wakeUpTime, bedTime) {

    let wake = () => alert('Доброе утро, Вася!');
    let goodmorning = setAlarm(wakeUpTime, wake);
    let bed = () => alert('Спокойной ночи, Вася!');
    let goodnight = setAlarm(bedTime, bed);
    
    setInterval (goodmorning, 1000);
    setInterval (goodnight, 1000);   
}
    

function setAlarm(time, callback) {
    let clock = new Date;
    let hours= clock.getHours().toString;
    let mins= clock.getMinutes().toString;
    let datastr = hours+ ":" + mins;
    if (hours <10) {
        hours = "0" + hours;
    }
    if (mins <10) {
        mins = "0" + mins;
    }
    if (datastr === time){
        return callback;
    } 
    
    }


