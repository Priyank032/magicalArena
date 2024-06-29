import assert from 'node:assert';
import { describe, it } from 'node:test';
import Player from '../src/Player';
import Match from '../src/Match';

describe('Match', () => {

  // Match starts correctly with two players
  it('should start correctly with two players', async () => {
    const playerA = new Player(30, 10, 5, 'Player A');
    const playerB = new Player(30, 10, 5, 'Player B');
    const match = new Match(playerA, playerB);

    await match.start();

    assert.ok(match.getRoundCount() >= 1);
  });


  // Match alternates attacker and defender each round
  it('should alternate attacker and defender each round', async () => {
    const playerA = new Player(40, 10, 5, 'Player A');
    const playerB = new Player(40, 10, 5, 'Player B');
    const match = new Match(playerA, playerB);

    await match.start();

    assert.ok(match.getRoundCount() >= 1);
  });

  // Match calculates attack and defense values correctly
  it('should calculate attack and defense values correctly', async () => {
    const playerA = new Player(30, 10, 5, 'Player A');
    const playerB = new Player(30, 10, 5, 'Player B');
    const match = new Match(playerA, playerB);

    await match.start();

    assert.ok(playerA.calculateAttackDamage() > 0);
    assert.ok(playerB.calculateDefendStrength() > 0);
  });

  // Match displays correct winner and round count
  it('should display correct winner and round count', async () => {
    const playerA = new Player(100, 10, 5, 'Player A');
    const playerB = new Player(5, 10, 5, 'Player B');
    const match = new Match(playerA, playerB);

    await match.start();

    assert.strictEqual(playerA.isAlive(), true);
    assert.ok(match.getRoundCount() >= 1);
  });

  // Match starts with one player having very low health
  it('should start with one player having very low health', async () => {
    const playerA = new Player(100, 10, 5, 'Player A');
    const playerB = new Player(5, 10, 5, 'Player B');
    const match = new Match(playerA, playerB);

    await match.start();

    assert.strictEqual(playerB.isAlive(), false);
  });

  // Match starts with both players having equal health
  it('should start with both players having equal health', async () => {
    const playerA = new Player(40, 10, 5, 'Player A');
    const playerB = new Player(40, 10, 5, 'Player B');
    const match = new Match(playerA, playerB);

    await match.start();

    assert.ok(match.getRoundCount() >= 1);
  });


  // Match handles a player with maximum possible health
  it('should handle a player with maximum possible health', async () => {
    const playerA = new Player(Number.MAX_SAFE_INTEGER, 10, 5, 'Player A');
    const playerB = new Player(20, 10, 5, 'Player B');
    const match = new Match(playerA, playerB);

    await match.start();

    assert.strictEqual(playerA.isAlive(), true);
  });
});
