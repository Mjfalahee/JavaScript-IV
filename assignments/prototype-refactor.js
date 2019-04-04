/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
/*
function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }


  GameObject.prototype.destroy = function(){
    return `${this.name} was removed from the game.`;
  }
  
  ////Personal tests
  
  const Egg = new GameObject( {
    createdAt: "2 PM",
    name: "Egg",
    dimensions: "Really really small"
  });
  
  console.log(Egg);
  console.log(Egg.destroy());
  
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  class CharacterStats extends GameObject {
      constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
      }

      takeDamage() {
        return `${this.name} took damage.`;
      }
      
  }

  /// old code
  /*
  function CharacterStats(stats) {
    GameObject.call(this, stats);
    this.healthPoints = stats.healthPoints;
  }

  CharacterStats.prototype = Object.create(GameObject.prototype);
  
  CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
  }

  ////Personal Tests
  
  const Egg = new CharacterStats( {
    createdAt: "2 PM",
    name: "Egg",
    dimensions: "Really really small",
    healthPoints: 50
  });
  
  console.log(Egg);
  console.log(Egg.destroy());
  console.log(Egg.takeDamage());
  
  
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
   class Humanoid extends CharacterStats {
       constructor(elements) {
        super(elements);
        this.team = elements.team;
        this.weapons = elements.weapons;
        this.language = elements.language;
       }

       greet() {
        return `${this.name} offers a greeting in ${this.language}`;
       }
   }
   /*

   //// old code
  function Humanoid(elements) {
    CharacterStats.call(this,elements);
    this.team = elements.team;
    this.weapons = elements.weapons;
    this.language = elements.language;
  }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  Humanoid.prototype.greet = function() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    class Villain extends Humanoid {
        constructor(evil) {
            super(evil);
        }
        attack(target) {
            let x = 8;
            let y = 11;
            let damage = Math.floor(Math.random() * (+y - +x) + +x);
            target.healthPoints = target.healthPoints - damage;
            if (this.healthPoints < 1) {
              console.log(`${this.name} has perished and cannot continue the fight`)
              return target.healthPoints;
            }
            if (target.healthPoints < 1) {
              console.log(`${this.name} has won the fight, and holds his swing`)
              return target.healthPoints;
            } 
            if (target.healthPoints < 10) { 
              console.log(`${this.name} savagely ends the life of ${target.name} with a final swing from his ${this.weapons}`)
              return target.healthPoints;
            }
            else {
              console.log(`${this.name} attacks ${target.name} with his ${this.weapons} for ${damage} damage`);
              console.log(`${target.name} has ${target.healthPoints} health remaining`);
              return target.healthPoints;
            }
        }
    }

    /*
    // old code

    function Villain(evil) {
      Humanoid.call(this,evil);
    }
  
    Villain.prototype = Object.create(Humanoid.prototype);
  
    Villain.prototype.attack = function(target) {
      let x = 8;
      let y = 11;
      let damage = Math.floor(Math.random() * (+y - +x) + +x);
      target.healthPoints = target.healthPoints - damage;
      if (this.healthPoints < 1) {
        console.log(`${this.name} has perished and cannot continue the fight`)
        return target.healthPoints;
      }
      if (target.healthPoints < 1) {
        console.log(`${this.name} has won the fight, and holds his swing`)
        return target.healthPoints;
      } 
      if (target.healthPoints < 10) { 
        console.log(`${this.name} savagely ends the life of ${target.name} with a final swing from his ${this.weapons}`)
        return target.healthPoints;
      }
      else {
        console.log(`${this.name} attacks ${target.name} with his ${this.weapons} for ${damage} damage`);
        console.log(`${target.name} has ${target.healthPoints} health remaining`);
        return target.healthPoints;
      }
    };
  */

    class Hero extends Humanoid {
        constructor(good) {
            super(good);
        }
        attack(target) {
            let x = 10;
            let y = 15;
            let damage = Math.floor(Math.random() * (+y - +x) + +x);
            target.healthPoints = target.healthPoints - damage;
            if (this.healthPoints < 1) {
              console.log(`${this.name} has perished and cannot continue the fight`)
              return target.healthPoints;
            }
            if (target.healthPoints < 1) {
              console.log(`${this.name} has won the fight, and holds his swing`)
              return target.healthPoints;
            }
            if (target.healthPoints < 10) {
              console.log(`${this.name} savagely ends the life of ${target.name} with a final swing from his ${this.weapons}`)
              return target.healthPoints;
            }
            else {
              console.log(`${this.name} attacks ${target.name} with his ${this.weapons} for ${damage} damage`);
              console.log(`${target.name} has ${target.healthPoints} health remaining`);
              return target.healthPoints;
            }
        }
    }

    /*
    /// old code

    function Hero(good) {
      Humanoid.call(this,good);
    }
  
    Hero.prototype = Object.create(Humanoid.prototype);
  
    
    Hero.prototype.attack = function(target) {
      let x = 10;
      let y = 15;
      let damage = Math.floor(Math.random() * (+y - +x) + +x);
      target.healthPoints = target.healthPoints - damage;
      if (this.healthPoints < 1) {
        console.log(`${this.name} has perished and cannot continue the fight`)
        return target.healthPoints;
      }
      if (target.healthPoints < 1) {
        console.log(`${this.name} has won the fight, and holds his swing`)
        return target.healthPoints;
      }
      if (target.healthPoints < 10) {
        console.log(`${this.name} savagely ends the life of ${target.name} with a final swing from his ${this.weapons}`)
        return target.healthPoints;
      }
      else {
        console.log(`${this.name} attacks ${target.name} with his ${this.weapons} for ${damage} damage`);
        console.log(`${target.name} has ${target.healthPoints} health remaining`);
        return target.healthPoints;
      }
    };

    */
  
    const Bill = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 100,
      name: 'Bill the Bashful',
      team: 'Mage Guild',
      weapons: [
        'Severed Cow Leg',
      ],
      language: 'Common Tongue',
    });
  
    
    const Randy = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 80,
      name: 'Randy the Render',
      team: 'Mage Guild',
      weapons: [
        'Cleaver',
      ],
      language: 'Common Tongue',
    });
  
  
    Bill.attack(Randy);
    Randy.attack(Bill);
    Bill.attack(Randy);
    Randy.attack(Bill);
    Bill.attack(Randy);
    Randy.attack(Bill);
    Bill.attack(Randy);
    Randy.attack(Bill);
    Bill.attack(Randy);
    Randy.attack(Bill);
    Bill.attack(Randy);
    Randy.attack(Bill);
    Bill.attack(Randy);
    Randy.attack(Bill);
    Bill.attack(Randy);
    Randy.attack(Bill);
