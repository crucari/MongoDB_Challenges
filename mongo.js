//Mongo Level 1
// Database: myGame

//Monsters Collection
//1st document
    // db.monsters.insert(
    //     {
    //         "name": "Gremlin",
    //         "health": "Great",
    //         "lastFought": new Date (2018, 1, 17),
    //         "attacks": ["growl", "punch", "scratch"],
    //         "stats": {"attack": 10, "defense": 5}
    //     })

//2nd document
    // db.monsters.insert(
    //     {
    //         "name": "Manticore",
    //         "health": "Great",
    //         "lastFought": new Date (2018, 1, 14),
    //         "attacks": ["pounce", "raid", "charge"],
    //         "stats": {"attack": 20, "defense": 10}
    //     })

// _________________

//Javascript code that would insert the four attributes into the “monster” collection as a new document.
function addMonster(name, health, lastFought, attacks, stats, db){
    db.monsters.insert({
        "name": name,
        "health": health,
        "lastFought": lastFought,
        "attacks": attacks,
        "stats":{"attack": stats.attack, 
            "defense": stats.defense
        }
    })
}

//console.log all the documents inside the collection.
console.log(db.monsters.find());

//find by name
db.monsters.find({"name": "Gremlin"})

//find by attack
db.monsters.find({"attack": "growl"})

//find by defense stat
db.monsters.find({"stats.defense": 2})

