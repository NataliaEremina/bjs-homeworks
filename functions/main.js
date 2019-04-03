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

//задание 2 - подскажите пожалуйста по верному ли  иду пути? немножко запуталась если честно

function getPersonData( secretData ) {
    
    let compare = {
        aaa: 'firstName',
        bbb: 'lastName',
        show: function name (n) {
            if (n = 0) {
                return 'Родриго';
            } else if (n=1) {
                return 'Эмильо';
            } else {
                return 'не существует';
            }
        }
    }
return `{compare.aaa: compare.show(),
    compare.bbb: compare.show()}`

}

//задание 3