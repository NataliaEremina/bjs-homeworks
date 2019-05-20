function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}


function checkBirthday(birthday) {
    let today = new Date();
    let today_ms = Date.now(); 
    let dateofbirthday = new Date(birthday); // в консоли invalid date
    let dateofbirthday_ms = +dateofbirthday; //в консоли NaN
    let diff = today_ms - dateofbirthday_ms; //в консоли NaN
    let daysnv = 31536000000; //мс в невисокосном
    let daysv = 31622400000; //мс в високосном;
    let av_days = (daysnv + daysv) / 2; //усредненные мс в невисокосном и високосном годах
    let age = diff / av_days;
    console.log (dateofbirthday);
    return age > 18;
    }
function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
    
}

function getAnimalSound(animal) {
    let sound = animal.sound;
    if (animal.sound == undefined) {
        return null;
    } else {
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];    
    }
    let averages = sum / marks.length;
    let roundedAverage = Math.round(averages);
    return roundedAverage;
}