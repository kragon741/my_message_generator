// Message Generator
// Every time a user runs a program, they get a new, randomized output.
function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

// The encouragement object with three nested arrays
const encouragement = {
  title: ['winner', 'sage', 'legend', 'hero', 'wizard', 'master empath', 'tornado', 'trailblazer', 'genius', 'heartthrob'],
  ability: ['heals', 'transforms', 'inspires', 'amazes', 'helps', 'dazzles', 'respects', 'improves', 'solves', 'saves'],
  action: ['show them what you are made of', 'make someones day', 'do something nice for yourself', 'pay it forward', 'be kind', 'make someone smile', 'change the world', 'save the day', 'share gratitude', 'take extra special care of yourself']
}

// Store the 'encouragement' in an array
let personalEncouragement = [];

// Iterate over the object
for (let prop in encouragement) {
  let randomId = generateRandomNumber(encouragement[prop].length);
  
}