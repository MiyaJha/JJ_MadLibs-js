const person = "Jhamiya" 
let gender = "a woman";
const weatherType = "cold & stormy";
const houseType = "victorian mansion";
const wallTalk = "her deepest, darkest secrets";
const booleanValue = houseType.includes(" victorian mansion");
let num1 = 10
let num2 = 7
const mathResult = 10 - 7;


const STORY = `On a ${weatherType} night, ${person} ventured into the haunted ${houseType}.
Despite being ${gender} who knows how these stories usually end, ${person} could not
resist the chance to experience a real-life scare!
The creaking walls seemed to whisper ${wallTalk}, sending chills down her spine. 
Suddenly, a ghost appeared, its glowing eyes piercing through the darkness. 
${person}'s heart raced as it floated silently toward her. 
Did you know ${num1} - ${num2} equals ${mathResult}? Spooky, right?`;

document.getElementById("madlibs-output").textContent = STORY;

console.log(STORY);