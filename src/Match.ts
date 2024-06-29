import Player from './Player';

class Match {
  private playerA: Player;
  private playerB: Player;
  private roundCount: number;

  // Constructor to initialize the match with two players
  constructor(playerA: Player, playerB: Player) {
    this.playerA = playerA;
    this.playerB = playerB;
    this.roundCount = 0; // Initialize round count to zero
  }

  // Method to start the match
  async start(): Promise<void> {
    // Determine initial attacker and defender based on health comparison
    let [attacker, defender] = this.determineInitialAttackerAndDefender();
    
    console.log(`Starting the match between ${this.playerA.getName()} - ${this.playerB.getName()}`);
    console.log(`${attacker.getName()} will start with attacking`);

    // Main loop for rounds while both players are alive
    while (this.playerA.isAlive() && this.playerB.isAlive()) {
      await this.pause(); // Pause before each round
      console.log(`Round : ${++this.roundCount}`); // Increment and display round count
      this.attack(attacker, defender); // Execute attack by current attacker
      [attacker, defender] = [defender, attacker]; // Swap attacker and defender for next round
    }

    // Determine and display match outcome
    const winner = this.playerA.isAlive() ? this.playerA : this.playerB;
    console.log(`\nStatistics:`);
    console.log(`Winner: ${winner.getName()} \nRounds Taken: ${this.roundCount}`);
  }

  // Method to determine the initial attacker and defender based on health comparison
  private determineInitialAttackerAndDefender(): [Player, Player] {
    // Player with lower health will be the attacker first
    if (this.playerA.getHealth() <= this.playerB.getHealth()) {
      return [this.playerA, this.playerB];
    } else {
      return [this.playerB, this.playerA];
    }
  }

  // Method to simulate an attack between two players
  private attack(attacker: Player, defender: Player): void {
    console.log(`Attacker: ${attacker.getName()}`);
    const attackDamage = attacker.calculateAttackDamage(); // Calculate attack damage
    const defendStrength = defender.calculateDefendStrength(); // Calculate defend strength

    const damageTaken = Math.max(0, attackDamage - defendStrength); // Calculate actual damage taken
    console.log(`${attacker.getName()}: Damaging ${defender.getName()} with: ${damageTaken}`);
    defender.receiveDamage(damageTaken); // Apply damage to defender

    console.log(`${defender.getName()}: Remaining Health: ${defender.getHealth()}`); // Display defender's remaining health
  }

  // Method to pause execution for a short period (simulates round delay)
  private async pause(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Getter method to retrieve the current round count
  getRoundCount(): number {
    return this.roundCount;
  }
}

export default Match;
