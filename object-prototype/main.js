function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    let dateofbirthday = new Date(year, month, date);
    let birthday = dateofbirthday.Date.now();
    let diff = now - birthday; //в миллисекундах
    let age = diff / ((31536000000 * 37) + (31622400000 * 12)); // с учетом високосных лет
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
    //return result;   //в этой функции не задан return, почему?
}

function getAnimalSound(animal) { // аргумент в функции animal это то же значение что и а константе const animal? из функции видна константа другой из-за этой строчки - const result = getAnimalSound(animal);?
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
    let i = marks.length;
    for (i = 0, i < marks.length, i++) {
        sum += marks[i];    
    }
    let average = sum / marks.length; //последние три строчки кода у меня в IDE не подсвечены даже, почему они неверные?
    let roundedAverage = Math.round(average);
    return roundedAverage;
}