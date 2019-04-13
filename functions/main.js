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

//задание 2 - запуталась как поместить свойства в объект

function getPersonData( secretData ) {
    let names = new Object();
    names.aaa = 'firstName';
    names.bbb = 'lastName';
    
    return names.push ({
        firstName: name (), //убрала name(n) как вы сказали - думала что укажу как в функции ниже - она смотрит на то что ввели 0 или 1
        lastName: name ()
    });   
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



//задание 3 

function getAverageScore( data ) {
    let journal = {};
    journal.science = new Array(marks); //а как можно предусмотреть много предметов и еще посчитать и по всем среднюю?
    
    for (let item in marks) {
        countaverage (marks);
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
//а что значит строчка задания 5. Предусмотрите работу программы для случая, когда предметов в объекте data будет менее 10. - не понимаю что нужно сделать?
