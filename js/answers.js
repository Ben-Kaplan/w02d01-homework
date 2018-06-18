// datatypes
// 1: Boolean
// 2: String
// 3: Array
// 4: Array
// 5: Object
// 6: Object

// take it easy

// 1: 
let rainbow = ["Red", "Yellow", "Green", "Blue", "Indigo", "Violet"];
// 2:
console.log(rainbow[3]);
// 3:
const ben = {
	favoriteFood: "Sweet potato sushi",
	hobby: "Painting",
	town: "Louisville",
	favoriteDatatype: "Booleans",
};

// 4:

console.log(ben.hobby);


// crazy object

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}


// 1:

console.log(crazyObject.taco[1].salsa[5]);

// 2:

console.log(crazyObject.larry.quotes[0]);

// 3:

console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4:

console.log(crazyObject.larry.nicknames[1]);

// 5:

console.log(crazyObject.larry);


// Object-ception

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null";

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)































