"use strict";

//задание 1 
function getSolutions( a, b, c ) {
    let D = b**2 - 4 * a * c;
    if (D < 0) {
        return { D: D };
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return { roots: [ x1 ], D: D };
    } else {
        let x1 = (-b - Math.sqrt(D)) / 2 * a;
        let x2 = (-b + Math.sqrt(D)) / 2 * a;
        return { roots: [ x1, x2 ], D: D };
    };
}

    function showSolutionsMessage( a, b, c ) {
        let result = getSolutions( a, b, c );
        let answer = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}
        Значение дискриминанта: ${result.D}`;
        if (result.D < 0) {
            return answer `Уравнение не имеет вещественных корней`; //решила console.log заменить на вывод
        }   else if (result.D === 0) {
            return answer `Уравнение имеет один корень X₁ = ${result.roots}`;
            } else {
                    return answer `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
            };
        
    }

//задание 2 

function getPersonData (secretData) {
    let names = new Object();
    names.firstName = secretData.aaa;
    names.lastName = secretData.bbb;
    return {firstName: name (secretData.aaa), lastName: name (secretData.bbb)};   
}
      
function name ( n ) {
    return (n === 0) ? 'Родриго' : 'Эмильо';
}



//задание 3 

function getAverageScore( data ) {
    
    let journal = new Object();
    for (let item in data) {
        journal.item = countaverage(data[item]);
        let sum_subj = 0;
        sum_subj ++;
        let average = sum_subj / journal.item.length;
        journal.average = average;
    }

    return journal;
}


function countaverage (marks) {
    marks = [];
    let sum = 0;
    for (let i =0; i < marks.length; i++) {
        sum += marks[i];
    }
    let result = sum / marks.length;
    return result;
}

