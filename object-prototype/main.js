function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let today = new Date();
    let dateofbirthday = new Date(birthday);
    let diff = today - dateofbirthday; //в миллисекундах
    let daysnv = 31536000000; //мс в невисокосном
    let daysv = 31622400000; //мс в високосном;
    let age = diff / daysnv;  // без учета високосных лет
    /*for (i = today.getFullYear()-1, i < dateofbirthday.getFullYear(), i-4) { 
       // age = diff / daysv; 
    //}
    чтобы учесть високосные нужно написать цикл? я что-то запуталась*/
    if (age > 18) {
        return "Клиент совершеннолетний";
    } else {
        return "Клиент несовершеннолетний";
    }

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
    if (animal == undefined) {
        return null;
    } else if (animal !== undefined) {
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
    for (i = 0, i < marks.length, i++) {
        sum += marks[i];    
    }
    let averages = sum / marks.length;
    let roundedAverage = Math.round(averages);
    return roundedAverage;
}