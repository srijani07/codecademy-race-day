var readlineSync = require('readline-sync');

var userName = readlineSync.question("Welcome to XYZ decathlon! May I have your name? ");
console.log("Hi, "+userName);
var age = readlineSync.question("Please enter your age : ");

var status;


if(age > 18) {
    var raceNumber = Math.floor(Math.random() * 2000); //generates a random race number for the adult

    if(raceNumber >= 1000)
     console.log("Your race starts at 9:30 am. Your race number is : "+raceNumber);

    else
     console.log("Your race starts at 11 am. Your race number is : "+raceNumber);
}

else if(age === 18) {
    console.log("Please check with the volunteers at the venue.")
}

else 
 console.log("Your race starts at 12:30 pm.")
console.log("All the best! \n");