const numThrows = 600000;
let counts = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < numThrows; i++) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    counts[diceRoll - 1]++;
}

let probabilities = [];
for (let j = 0; j < 6; j++) {
    let probability = counts[j] / numThrows;
    probabilities.push(probability);
}

for (let k = 0; k < 6; k++) {
    console.log(`Number of ${k + 1}: ${counts[k]}, Probability: ${probabilities[k]}`);
}
