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
    return function () {
        let clock = new Date;
        let hours= clock.getHours();
        let mins= clock.getMinutes();
        
        if (hours <10) {
            hours = '0' + hours;
        }
        if (mins <10) {
            mins = '0' + mins;
        }
        let hourss = hours.toString;
        let minss = mins.toString;
        let datastr = hourss+ ":" + minss;
        if (datastr == time){
            callback();
        } 
    }

    }

setDailyRhythm('7:00','23:00');
