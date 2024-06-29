# Magical Arena

Magical Arena is a TypeScript-based game where two players compete by attacking and defending each other. The game simulates a turn-based match between two players, where each player has attributes like health, strength, and attack.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Unit Tests](#unit-tests)
- [Game Mechanics](#game-mechanics)
- [Contributing](#contributing)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Priyank032/magical_arena.git
   cd magical_arena

2. **Install dependencies:**

   Make sure you have Node.js and npm installed. Then run:

   ```sh
   npm install
3. **Ensure TypeScript is installed globally (optional but recommended):**

   ```sh
   npm install -g typescript
4. **Build the project:**

   Compile the TypeScript files to JavaScript:

   ```sh
   npm run build
5. **Run the game:**
- For Development
    Start the game using Node.js:

   ```sh
   npm start
- For Production
   Compile the TypeScript files to JavaScript:
    ```sh
   npm run build
   npm run serve
## Usage

Once the game is installed and built, follow these steps to play the Magical Arena:

1. **Start the Game:**

   ```sh
   npm run serve

2. **Enter Player Attributes:**

 - You will be prompted to enter attributes for Player A and Player B, such as health, strength, and attack.
 - Follow the instructions in the terminal to input positive integer values for each attribute.

3. **Gameplay:**
The game will simulate a turn-based match between Player A and Player B:

- Each player takes turns attacking and defending.
- Attributes such as health, strength, and attack determine the outcomes of attacks and defenses.
- Dice rolls influence the effectiveness of attacks and defenses.
- The game continues until one player's health drops to 0.

4. **View Results:**
After the game concludes:

- The winner (Player A or Player B) is announced.
- The number of rounds taken to finish the game is displayed.
- Detailed statistics, including actions taken each round and damage dealt, are shown.

## Unit Tests
Unit tests ensure that the game logic in the Player and Match classes works as expected. Here's how to run the unit tests and view the results.

### Running Unit Tests
To run the unit tests, use the following command:
```sh
    npm test
```
### Test Results
#### Player Class
The unit tests for the Player class verify the following functionalities:

- Initialization of player attributes (health, strength, attack).
- Correct calculation of damage dealt and received.
- Correct update of player health after an attack.
```sh
PASS  tests/Player.test.ts
  Player Class
      ✔ should initialize player with valid attributes
      ✔ should return correct initial health
      ✔ should return correct player name
      ✔ should return true for positive health
      ✔ should reduce health correctly when receiving damage
      ✔ should set health to zero if damage exceeds current health
      ✔ should initialize player with zero or negative health
      ✔ should not change health when receiving zero damage
      ✔ should set health to zero when receiving damage exactly equal to current health
      ✔ should return zero attack damage when attack attribute is zero
      ✔ should return zero defend strength when strength attribute is zero
      ✔ should return correct attack damage based on attack attribute and dice roll
      ✔ should return a value between 1 and 6 when rolling the dice
      ✔ should return false when player has zero health
```
#### Match Class
The unit tests for the Match class verify the following functionalities:

- Initialization of a match with two players.
- Correct turn-taking between players.
- Correct determination of the winner based on remaining health.
```sh
PASS  tests/Match.test.ts
  Match Class
    ✔ should start correctly with two players
    ✔ should alternate attacker and defender each round
    ✔ should calculate attack and defense values correctly
    ✔ should display correct winner and round count
    ✔ should start with one player having very low health
    ✔ should start with both players having equal health
    ✔ should handle a player with maximum possible health

```
## Game Mechanics
Player Attributes
- Health: Determines how much damage a player can sustain before losing.
- Strength: Affects the defense capability of the player.
- Attack: Determines the offensive power of the player.

Turn-Based Gameplay
- Players take turns attacking each other based on their attributes and dice rolls.
- Attack and defense values are calculated dynamically during each turn.
- Damage inflicted depends on the difference between attack and defense values, ensuring a minimum of 1 damage per attack.

Dice Rolls
- A six-sided die is rolled for each attack and defense, adding randomness to the game.
- Dice rolls influence attack and defense values, introducing variability in outcomes.


## Contributing
Contributions to the Magical Arena project are welcome! To contribute:
- Fork the repository on GitHub.
- Create a new branch with a descriptive name (git checkout -b feature/new-feature).
- Make your changes and commit them (git commit -am 'Add new feature').
- Push your changes to your forked repository (git push origin feature/new-feature).
- Submit a pull request on GitHub.




