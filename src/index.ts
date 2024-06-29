import readline from 'readline'; 
import Player from './Player';
import Match from './Match'; 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to asynchronously ask a question and return the user's input
async function askQuestion(query: string): Promise<string> {
  return new Promise(resolve => rl.question(query, resolve));
}

// Function to asynchronously get a positive integer from user input
async function getPlayerAttributes(prompt: string): Promise<number> {
  while (true) {
    const value = parseInt(await askQuestion(prompt), 10); // Parse user input as integer
    if (isNaN(value) || value <= 0) {
      console.log("Please enter a positive integer."); // Display error message for invalid input
    } else {
      return value; // Return valid positive integer
    }
  }
}

// Function to asynchronously create a Player object with user-defined attributes
async function createPlayer(name: string): Promise<Player> {
  console.log(`Enter ${name}'s attributes`); // Prompt user to enter player's attributes
  const health = await getPlayerAttributes('Health: ');
  const strength = await getPlayerAttributes('Strength: ');
  const attack = await getPlayerAttributes('Attack: '); 

  return new Player(health, strength, attack, name); 
}

// Main function to orchestrate the creation of two players and start a match between them
async function main() {
  const playerA = await createPlayer('Player A'); // Create Player A
  const playerB = await createPlayer('Player B'); // Create Player B

  const match = new Match(playerA, playerB); // Create a Match instance with Player A and Player B
  await match.start(); // Start the match

  rl.close(); // Close readline interface after the match ends
}

main().catch(console.error); // Execute main function and handle any errors
