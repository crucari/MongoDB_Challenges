// Instructions: 
// Write the command that will find all monsters with an attack lower than 10
// Write the command that will find all monsters with a level above 5 but below 15 inclusive
// Write the command to find monsters that do not have the “bite” attack.
// Write the command to find monsters with levels less than 6 but only return the name, level and health attributes
// Write the command to find all monsters who attack is between 10 and 20 but do not include the monsters health or style
// Write the command to find out how many monsters are in the collection.
// Write the command to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
var mongo = function(db) {
	//lower than 10
	db.monsters.find({
		"stats.attack": {
			"$lt": 10
		}
	})
	//Find all monsters with a level above 5 but below 15 inclusive
	db.monsters.find({
		"level": {
			"$gt": 5,
			"$lte": 15
		}
	})
	//Find monsters that do not have the “bite” attack.
	db.monsters.find({
		"attacks": {
			"$ne": "bite"
		}
	})
	//Find monsters with levels less than 6 but only return the name, level and health attributes
	db.monsters.find({
		"level": {
			"$lt": 6
		}
	}, {
		"name": true,
		"level": true,
		"health": true
	})
	//Find all monsters who attack is between 10 and 20 but do not include the monsters health or style
	db.monster.find({
		"stats.attack": {
			"$gt": 10,
			"$lt": 20
		}
	}, {
		"health": false,
		"style": false
	})
	//Find out how many monsters are in the collection.
	db.monsters.find().count()
	//Sort the collection by the monsters level with the highest level at the top and the lowest at the bottom
	db.monsters.find().sort({
		"level": -1
	})
};