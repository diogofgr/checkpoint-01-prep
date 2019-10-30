const assert = require('assert');
const battleship = require('./battleship.js');

describe('Generate Battleship board', () => {
    it('should have length 100', () => {
        assert.strictEqual(battleship().length, 100);
    });

    it('should return an array of strings', () => {
        assert.strictEqual(Array.isArray(battleship()), true);
        assert.strictEqual(typeof battleship()[33], 'string');
    });
    
    it('should return grid items in the correct position', () => {
        assert.strictEqual(battleship()[13], 'D-2');
        assert.strictEqual(battleship()[27], 'J-3');
        assert.strictEqual(battleship()[91], 'A-10');
    });
})