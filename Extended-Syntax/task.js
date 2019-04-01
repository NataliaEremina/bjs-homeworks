

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let D = b**2 - 4 * a * c; // тут ведь можно написать Math.pow(b, 2)?
    if (D < 0) {
        console.log ("Корней нет");
    } else if (D === 0) {
            x = (-b) / (2 * a);
            return x;
        } else {
            let x1 = -b + Math.sqrt(D) / (2 * a);
            let x2 = -b + Math.sqrt(D) / (2 * a);
            x = [x1 ,x2];
            return x;
            
        }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}