var database = [{
    username:"Szymon",
    password:"123",
},
{
    username:"Julka",
    password:"slodziak",
},
{
    username:"Luj",
    password:"debyl",
},];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");
function isUserValid(username,password){
    for(let i=0; i<database.length;i++){
        if(database[i].username===user && 
            database[i].password===pass){
               return true;
            }
            return false;
}
function signIn(user,pass){
    for(let i=0; i<database.length;i++){
        if(isUserValid(user,pass)===true){
                console.log(newsfeed);
            }
    else{
        console.log("Username or passward is wrong!");
    }        
    }


    // if(user === database[0].username && pass===database[0].password)
    // console.log(newsfeed);
    // else
    // console.log("Username or passward is wrong!");
}
signIn(userNamePrompt,passwordPrompt);
/*var todo=[
    eat,
    code,
    trening,
    sleep
]
for(let i =0;i<todo.length;i++){
    console.log(todo[i],i);
}
todo.forEach(function(todo,i){
    console.log(todo,i)
})
*/ 