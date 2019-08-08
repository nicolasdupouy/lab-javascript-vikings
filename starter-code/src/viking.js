// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return this.name + ' has received ' + damage + ' points of damage';
        }
        else {
            return this.name + ' has died in act of combat';
        }
    }

    battleCry() {
        return 'Odin Owns You All!';
    }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return 'A Saxon has received ' + damage + ' points of damage';
        }
        else {
            return 'A Saxon has died in combat';
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    getRandomViking() {
        return this.getRandomSoldier(this.vikingArmy);
    }
    getRandomSaxon() {
        return this.getRandomSoldier(this.saxonArmy);
    }
    getRandomSoldier(army) {
        let index = this.getRandomInt(army.length);
        return army[index];
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    vikingAttack() {
        let randomViking = this.getRandomViking();
        let randomSaxon = this.getRandomSaxon();
        let result = randomSaxon.receiveDamage(randomViking.attack());
        if (result == 'A Saxon has died in combat') {
            let randomSaxonPosition = this.saxonArmy.indexOf(randomSaxon);
            this.saxonArmy.splice(randomSaxonPosition, 1);
        }
        return result;
    }
    
    saxonAttack() {
        let randomViking = this.getRandomViking();
        let randomSaxon = this.getRandomSaxon();
        let result = randomViking.receiveDamage(randomSaxon.attack());
        if (result == randomViking.name + ' has died in act of combat') {
            let randomVikingPosition = this.vikingArmy.indexOf(randomViking);
            this.vikingArmy.splice(randomVikingPosition, 1);
        }
        return result;
    }
    
    showStatus() {
        if (this.saxonArmy.length == 0) {
            return 'Vikings have won the war of the century!';
        }
        else if (this.vikingArmy.length == 0) {
            return 'Saxons have fought for their lives and survive another day...';
        }
        else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
}