function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}


function checkBirthday(birthday) {
    let today = new Date();
    //let today_ms = Date.now(today); //1555304437749
    let dateofbirthday = new Date(birthday); //1555304508462
    let dateofbirthday_ms = +dateofbirthday;
    let diff = today - dateofbirthday_ms; //в миллисекундах
    let daysnv = 31536000000; //мс в невисокосном
    let daysv = 31622400000; //мс в високосном;
    let av_days = (daysnv + daysv) / 2; //усредненные мс в невисокосном и високосном годах
    let age = diff / av_days;
    console.log (diff);
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
    } else if (animal.sound !== undefined) {
        return sound;
    } else {
        return sound;//добавила на всякий случай
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