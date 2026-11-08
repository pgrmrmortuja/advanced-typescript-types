//Top Types: unknown , any
//01
//Receive Unknown Data from Server

let serverData: unknown = "User_101_Token";
if(typeof serverData === "string"){
    console.log(serverData.toUpperCase);
}

//02
//Handle Dynamic Form Input

let userInput: unknown = 300;
if(typeof userInput === "number"){
    console.log(userInput + 100);
}

//03
//Read data from browser localstorage

let savedTheme: unknown = "dark-mode"
if(typeof savedTheme === "string"){
    console.log(`Current Theme is ${savedTheme}`)
}
