// console.log("Before conditional");
// let random = Math.random();
// if(random < 0.5) {
//   console.log("Your number is less than 0.5");
//   console.log(random)
// }
// console.log("After conditionals");

// const dayOfWeek = prompt("choose a day").toLowerCase();

// if(dayOfWeek === 'monday') {
//   console.log("Ugh I hate mondays");
// } else if (dayOfWeek === 'saturday') {
//   console.log("Yay I love saturdays");
// } else if (dayOfWeek === 'friday'){
//   console.log("fridays are okay");
// } else {
//   console.log("meh");
// }


// const password = prompt("please enter a new password");
// if (password.length >= 6) {
//   if(password.indexOf(' ') === -1){
//     console.log("Valid Password");
//   } else {
//     console.log("passwords cannot have space");
//   }
// } else {
//   console.log("password too short");
// }

// const password  = prompt("enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1){
//   console.log("Valid");
// } else {
//   console.log('not valid');
// }

// 0-5 free
// 5-10 10
// 10-65 20
// 65+ 10

// const age = prompt("enter a number");
// if(age > 0 && age < 5 || age >= 65){
//   console.log("FREE");
// } else if (age > 0 && age < 16) {
//   console.log("$10");
// } else if (age > 16) {
//   console.log("$20");
// } else {
//   console.log("not a valid number");
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(let i = 1; i <= 10; i++){
//   console.log("I kind of understand this section");
// }

// let code = 'JAVASCRIPT';
// let guess = prompt("enter your guess to access this page");
// while(guess !== code){
//   guess = prompt("please try again");
// }
// console.log("congrats!");

// let maximum = parseInt(prompt("Enter the maximum number"));
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);


const raisinAlarm = function(cookie){
  let raisin = "🍇";
  for (let ingredient of cookie) {
    if(ingredient === raisin)
      return "Raisin alert";
  }
    return "All good";
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

// cmd + j

const raisinAlarmArray = function(cookies) {
  let resultarr = [];

console.log(cookies);
  for (let i = 0; i < cookies.length; i++) {
    // cookie
    resultarr.push(raisinAlarm(cookies[i])); // converts cookie (array) to a string
    // resultarr.push(string)
  }

  return resultarr;
  
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"], // 0 
    ["🍫", "🍇", "🍫", "🍫", "🍇"], // 1
    ["🍫", "🍫", "🍫"] // 2
  ]
));