var age = Number(prompt("Please enter your age"));

if (age < 1) {
    console.log("Error");
} 

if (age === 21) {
    console.log("Happy 21st Birthday!");
} 

if (age % 2 !== 0){
    console.log("your age is odd!");
} 

if (age % Math.sqrt(age) === 0){
    console.log("perfect square!");
} 

if (age < 21) {
    console.log("Sorry too young to drink!")
}

if (age > 21) {
    console.log("You may enter for a drink")
}

if (age < 21 && age > 18) {
    console.log("You may enter but cannot drink")
}