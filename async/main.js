'use strict';

function setDailyRhythm(wakeUpTime, bedTime) {

    let wake = () => alert('Доброе утро, Вася!');
    let goodmorning = setAlarm(wakeUpTime, wake);
    let bed = () => alert('Спокойной ночи, Вася!');
    let goodnight = setAlarm(bedTime, bed);
    
    setInterval (setAlarm, 1000);   
}
    

function setAlarm(time, callback) {
    let clock = new Date;
    let hours= clock.getHours();
    let mins= clock.getMinutes();
    let datastr = hours+":"+ mins;
    if (datastr == time) {
        return callback;
    } 
 
}


