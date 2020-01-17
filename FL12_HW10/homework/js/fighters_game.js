function Fighter(options) {
    let wins = 0;
    let looses = 0;
    let healthPoint = options.hp;
    return {
        getName: () => options.name,
        getDamage: () => options.damage,
        getStrength: () => options.strength,
        getAgility: () => options.agility,
        getHealth: () => options.hp,
        attack: (defender) => {
            let probability = Math.floor(Math.random() * 100) - (defender.getStrength() + defender.getAgility());
            if (probability > 50) {
                defender.dealDamage(options.damage);
                console.log(`${options.name} makes ${options.damage} damage to ${defender.getName()}`);
            } else {
                console.log(`${options.name} attack missed`);
            }
        },
        logCombatHistory: () => `Name: ${options.name},Wins: ${wins},Losses: ${looses}`,
        heal: (healHP) => {
            const increasedHp = options.hp + healHP;
            if (increasedHp > healthPoint) {
                options.hp = healthPoint
            } else {
                options.hp = increasedHp;
            }
        },
        dealDamage: (damagePts) => {
            const decreasedHp = options.hp - damagePts;
            if (decreasedHp < 0) {
                options.hp = 0;
            } else {
                options.hp = decreasedHp;
            }
        },
        addWin: () => wins++,
        addLoss: () => looses++
    }

}
function battle(fighter1, fighter2) {
    if (fighter1.getHealth() !== 0) {
        if (fighter2.getHealth() !== 0) {
            while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
                fighter1.attack(fighter2);
                fighter2.attack(fighter1);
            }
            if (fighter1.getHealth() > 0) {
                console.log(`${fighter1.getName()} has won!`)
                fighter1.addWin();
                fighter2.addLoss();
            } else {
                fighter2.addWin();
                fighter1.addLoss();
                console.log(`${fighter2.getName()} has won!`)
            }
        } else {
            console.log(`${fighter2.getName()} is dead and can't fight`)
        }
    } else {
        console.log(`${fighter1.getName()} is dead and can't fight`)
    }
}

const myFighter = new Fighter({
    name: 'Maximus',
    damage: 20, hp: 100,
    strength: 20, agility: 15
});
const myFighter1 = new Fighter({
    name: 'Comandos',
    damage: 25, hp: 90,
    strength: 25, agility: 20
});
