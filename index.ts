#! /usr/bin/env node
import inquirer from "inquirer" ;

console.log("\n\t welcome to cli-number-guessing-game\n");

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number" ,
        message : "please guess a number between 1-6:",
    },
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("congratulations you guessed a  right number.");
}
else{
    console.log("sorry!you guessed a wrong number.");
}
