// 1.
let warmHugs = "Hi, I'm Olaf and I like warm hugs";
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs.toUpperCase());
// 2.
let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18,35));
// 3.
let dotDOTDOT = "...";
let skullBones = `I don't have a skull${dotDOTDOT}or bones`;
console.log(skullBones);
// 4.
console.log(Math.PI);
// 5.
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);
// Bonus
// 6.
console.log(" Let It Go!" .repeat(2).trim().toUpperCase());
// 7.
let reindeers = "Reindeers are better than people.";
console.log(reindeers.replaceAll(" ", "_"));
// 8.
console.log(Math.sqrt(2));
// 9.
let newRandomNumber = Math.random();
newRandomNumber *= 17;
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber += 7;
console.log(newRandomNumber);
