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
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(viking) {
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon = function(saxon) {
    this.saxonArmy.push(saxon);
}

War.prototype.getRandomViking = function() {
    return this.getRandomSoldier(this.vikingArmy);
}
War.prototype.getRandomSaxon = function() {
    return this.getRandomSoldier(this.saxonArmy);
}
War.prototype.getRandomSoldier = function(army) {
    let index = this.getRandomInt(army.length);
    return army[index];
}
War.prototype.getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

War.prototype.vikingAttack = function() {
    randomViking = this.getRandomViking();
    randomSaxon = this.getRandomSaxon();
    result = randomSaxon.receiveDamage(randomViking.attack());
    if (result == 'A Saxon has died in combat') {
        randomSaxonPosition = this.saxonArmy.indexOf(randomSaxon);
        this.saxonArmy.splice(randomSaxonPosition, 1);
    }
    return result;
}

War.prototype.saxonAttack = function() {
    randomViking = this.getRandomViking();
    randomSaxon = this.getRandomSaxon();
    result = randomViking.receiveDamage(randomSaxon.attack());
    if (result == randomViking.name + ' has died in act of combat') {
        randomVikingPosition = this.vikingArmy.indexOf(randomViking);
        this.vikingArmy.splice(randomVikingPosition, 1);
    }
    return result;
}

War.prototype.showStatus = function() {
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