'use strict';

class Weapon {
    constructor (name, attack, firstDurability, range) {
        this.name = name;
        this.attack = attack;
        this.firstDurability = durability;
        this.secondDurability = firstDurability - damage;
        this.range = range;
        this.takeDamage = takeDamage(damage);
        this.getDamage = getDamage();
        this.isBroken = isBroken();
    }
}

function takeDamage(damage) {
    secondDurability = firstDurability - damage;
    if (secondDurability < 0) {
        return secondDurability = 0;
    }
}

function getDamage() { //а почему мы в getDamage и isBroken не передаем аргументов - скобки пустые?
    if (secondDurability >= (secondDurability/firstDurability)*100) {
        return attack;
    } else if (secondDurability == 0) {
        return attack = 0;
    } else { 
        attack = attack / 2;
    }
}

function isBroken() {
    if (secondDurability > 0) {
        return false;
    } else {
        return true;
    }
}

const weapons = new Weapon();

const weaponOne = new Weapon('Рука', 1, Infinity, 1);
const weaponTwo = new Weapon('Лук', 10, 200, 3);
const weaponThree = new Weapon('Меч', 1, Infinity, 1);
const weaponFour = new Weapon('Нож', 1, Infinity, 1);
const weaponFive = new Weapon('Посох', 1, Infinity, 1);
//правильно ли что я создаю улучшенное оружие точно также как и обычное?
const weaponSix = new Weapon('Длинный лук', 15, 200, 4);
const weaponSeven = new Weapon('Секира', 27, 800, 1);
const weaponEight = new Weapon('Посох Бури', 10, 300, 3);
// а как мы можем указать на собственные свойства объекта но при этом наследовать от родителя вс что нужно? через super?
const weaponOne = new WeaponOne();
class WeaponOne extends Weapon {

}
const weaponTwo = new WeaponTwo();
class WeaponTwo extends Weapon {

}
const weaponThree = new WeaponThree();
class WeaponThree extends Weapon {

}
const weaponFour = new WeaponFour();
class WeaponFour extends Weapon {

}
const weaponFive = new WeaponFive();
class WeaponFive extends Weapon {

}
const weaponSix = new WeaponSix();
class WeaponSix extends WeaponTwo {

}
const weaponSeven = new WeaponSeven();
class WeaponSeven extends WeaponThree {

}
const weaponEight = new WeaponEight();
class WeaponEight extends WeaponFive {

}