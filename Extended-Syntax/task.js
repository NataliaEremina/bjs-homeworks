'use strict';

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
    let D = b**2 - 4 * a * c;
    if (D < 0) {
        console.log ("Корней нет");
        return [];
    }   else if (D === 0) {
            return (-b) / (2 * a);
        }   else {
                let x1 = -b - Math.sqrt(D) / (2 * a);
                let x2 = -b + Math.sqrt(D) / (2 * a);
                return [x1 ,x2];            
            }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let today = new Date().getFullYear();
    let yearBirthday = dateOfBirthday.getFullYear();
    let age = today - yearBirthday;
    let answer = (age > 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(answer)
    return answer;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    if (marks.length > 5) {
        console.log ("Количество оценок больше 5 - вычисляем по первым пяти оценкам");
        marks = marks.slice (0,5);        
    }  
    let sum = 0;
    for (let n = 0; n < marks.length; n++){
    sum += marks[n];
    }
    return sum / marks.length;
    }