"use strict";

//задание 1 - не получается верно вычислить корни x1 и x2, не могу понять почему
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
        if (result.D < 0) {
            return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}
            Значение дискриминанта: ${result.D}
            Уравнение не имеет вещественных корней`;
        }   else if (result.D === 0) {
            return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}
            Значение дискриминанта: ${result.D}
            Уравнение имеет один корень X₁ = ${result.roots}`;
            } else {
                    return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}
                    Значение дискриминанта: ${result.D}
                    Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
            };
        
    }

//задание 2 - совсем запуталсь(

function getPersonData( secretData ) {
    let aaa = 'firstName';
    let bbb = 'lastName';
    
    return {
        aaa: name (n), //можно ли прописывать внутри первой функции вторую?
        bbb: name (n)
    };   
}        
function name (n) {
    if (n = 0) {
        return 'Родриго';
        } else if (n=1) {
            return 'Эмильо';
            } else {
                return 'не существует';
            }
}



//задание 3 - подскажите пожалуйста верно ли мыслю

function getAverageScore( data ) {
    let journal = New Object(); // здесь ругается консоль - не могу понять почему
    journal.science = "";
    journal.marks = [];
    journal.marksaverage = countaverage (data);
    for (var prop in data) {
       return journal.push( prop );
}
}

function countaverage (marks) {
    let sum = 0;
    for (let i =0; i < marks.length; i++) {
        sum += marks[i];
    }
    let result = sum / marks.length;
    return result;
}