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

//задание 2 - запуталась как и где указать aaa и bbb и как вернуть объект со свойствами

function getPersonData( secretData ) {
    let names = new Object();
    secretData.firstName = names.firstName;
    secretData.lastName = names.lastName;
    for (var key in secretData) {
        aaa = 'firstName';
        bbb = 'lastName';
        result = name (secretData[key])
        return names[key] = result;
    }
    
}
      
function name (n) {
    if (n == 0) {
        return 'Родриго';
        } else if (n == 1) {
            return 'Эмильо';
            } else {
                return 'не существует';
            }
}



//задание 3 

function getAverageScore( data ) {
    let journal = new Object();
    
    for (let item in data) {
       let average = countaverage (data[item]); //среднее по каждому предмету
        journal[item] = average;
    }
    for (let prop in data[item]) {
        let sum = countaverage (data[item][prop]);
        journal[item][prop] = sum; //среднее по всем
    }
    return // не могу понять что возвращать
}

function countaverage (marks) {
    let sum = 0;
    for (let i =0; i < marks.length; i++) {
        sum += marks[i];
    }
    let result = sum / marks.length;
    return result;
}
