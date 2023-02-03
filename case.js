const userName = "blackpink";
const userInput = "blackPink";
console.log(userName.toLocaleLowerCase());
console.log(userInput.toLocaleUpperCase());
console.log(userName.toLocaleLowerCase());

if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid User')
}
else {
    console.log('invalid User')
}