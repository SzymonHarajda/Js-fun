var database = [{
    username:"Szymon",
    password:"123",
}];
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

function signIn(user,pass){ 
    if(user === database[0].username && pass===database[0].password)
    console.log(newsfeed);
    else
    console.log("Username or passward is wrong!");
}
signIn(userNamePrompt,passwordPrompt);