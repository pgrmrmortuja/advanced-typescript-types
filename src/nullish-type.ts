// Nullish Types : null , undefined
//01
//Get user profile photo

let profilePicUrl: string | null = null ;

if(profilePicUrl !== null){
    console.log("picture uploaded")
} else{
    console.log("no picture")
}

//02
//User social media bio

let userBio: string | undefined = undefined ; 
if(userBio !== undefined){
    console.log(`User Bio is: ${userBio}`)
} else{
    console.log("No Bio uploaded")
}

