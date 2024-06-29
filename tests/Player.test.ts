import assert from "node:assert";
import { describe, it, before, after } from "node:test";
import Player from "../src/Player";
import Match from "../src/Match";
describe("Player", () => {
  let originalMathRandom: () => number;
  // calculateAttackDamage returns correct value based on attack attribute and mocked dice rollconst originalMathRandom = Math.random;
  before(() => {
    Math.random = () => 0.5;
  });

  // Restore Math.random after all tests in this describe block
  after(() => {
    Math.random = originalMathRandom;
  });

  // Player initialization with valid attributes
  it("should initialize player with valid attributes", () => {
    const player = new Player(100, 10, 5, "Hero");
    assert.strictEqual(player.getHealth(), 100);
    assert.strictEqual(player.getName(), "Hero");
  });

  // getHealth returns correct initial health
  it("should return correct initial health", () => {
    const player = new Player(100, 10, 5, "Hero");
    assert.strictEqual(player.getHealth(), 100);
  });

  // getName returns correct player name
  it("should return correct player name", () => {
    const player = new Player(100, 10, 5, "Hero");
    assert.strictEqual(player.getName(), "Hero");
  });

  // isAlive returns true for positive health
  it("should return true for positive health", () => {
    const player = new Player(100, 10, 5, "Hero");
    assert.strictEqual(player.isAlive(), true);
  });

  // receiveDamage reduces health correctly
  it("should reduce health correctly when receiving damage", () => {
    const player = new Player(100, 10, 5, "Hero");
    player.receiveDamage(20);
    assert.strictEqual(player.getHealth(), 80);
  });

  // receiveDamage sets health to zero if damage exceeds current health
  it("should set health to zero if damage exceeds current health", () => {
    const player = new Player(50, 10, 5, "Hero");
    player.receiveDamage(60);
    assert.strictEqual(player.getHealth(), 0);
  });

  // Player initialization with zero or negative health
  it("should initialize player with zero or negative health", () => {
    const player = new Player(-10, 10, 5, "Hero");
    assert.strictEqual(player.getHealth(), -10);
    assert.strictEqual(player.isAlive(), false);
  });

  // receiveDamage with zero damage
  it("should not change health when receiving zero damage", () => {
    const player = new Player(100, 10, 5, "Hero");
    player.receiveDamage(0);
    assert.strictEqual(player.getHealth(), 100);
  });

  // receiveDamage with damage exactly equal to current health
  it("should set health to zero when receiving damage exactly equal to current health", () => {
    const player = new Player(50, 10, 5, "Hero");
    player.receiveDamage(50);
    assert.strictEqual(player.getHealth(), 0);
  });

  // calculateAttackDamage with attack attribute set to zero
  it("should return zero attack damage when attack attribute is zero", () => {
    const player = new Player(100, 10, 0, "Hero");
    const attackDamage = player.calculateAttackDamage();
    assert.strictEqual(attackDamage, 0);
  });

  // calculateDefendStrength with strength attribute set to zero
  it("should return zero defend strength when strength attribute is zero", () => {
    const player = new Player(100, 0, 5, "Hero");
    const defendStrength = player.calculateDefendStrength();
    assert.strictEqual(defendStrength, 0);
  });

  it("should return correct attack damage based on attack attribute and dice roll", () => {
    const player = new Player(100, 10, 5, "Hero");
    const attackDamage = player.calculateAttackDamage();
    assert.strictEqual(attackDamage, 20); // 5 (attack) * 4 (mocked dice roll)
  });

  // rollDice always returns a value between 1 and 6
  it("should return a value between 1 and 6 when rolling the dice", () => {
    const player = new Player(100, 10, 5, "Hero");
    const diceValue = player["rollDice"]();
    console.log(diceValue, "diceValue");
    assert.ok(diceValue >= 1 && diceValue <= 6);
  });

  // isAlive returns false for zero health
  it("should return false when player has zero health", () => {
    const player = new Player(0, 10, 5, "TestPlayer");
    assert.strictEqual(player.isAlive(), false);
  });
});
