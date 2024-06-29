
class Player {
    private health: number;
    private strength: number;
    private attack: number;
    private name: string;
  
    // Constructor to initialize player attributes
    constructor(health: number, strength: number, attack: number, name: string) {
      this.health = health;
      this.strength = strength;
      this.attack = attack;
      this.name = name;
    }
  
    // Getter method for retrieving player's current health
    getHealth(): number {
      return this.health;
    }
  
    // Getter method for retrieving player's name
    getName(): string {
      return this.name;
    }
  
    // Check if the player is alive based on their current health
    isAlive(): boolean {
      return this.health > 0;
    }
  
    // Method to apply damage to the player
    receiveDamage(damage: number): void {
      this.health -= damage;
      if (this.health < 0) {
        this.health = 0; // Ensure health doesn't go below zero
      }
    }
  
    // Private method to simulate rolling a dice
    private rollDice(): number {
      const diceValue = Math.floor(Math.random() * 6) + 1; // Generates a random integer between 1 and 6
      console.log(`${this.getName()}: Rolling dice; Got dice value of ${diceValue}`);
      return diceValue;
    }
  
    // Calculate attack damage based on player's attack attribute and dice roll
    calculateAttackDamage(): number {
      const diceValue = this.rollDice();
      const attackValue = this.attack * diceValue;
      console.log(`${this.getName()}: Attack Value: ${attackValue}`);
      return attackValue;
    }
  
    // Calculate defense strength based on player's strength attribute and dice roll
    calculateDefendStrength(): number {
      const diceValue = this.rollDice();
      const defendValue = this.strength * diceValue;
      console.log(`${this.getName()}: Defend Value: ${defendValue}`);
      return defendValue;
    }
  }
  
  export default Player;
  