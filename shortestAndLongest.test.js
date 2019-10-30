const assert = require('assert');
const shortestAndLongest = require('./shortestAndLongest.js');

describe('Get the shortest and the longest strings', () => {
    it('should be a function', () => {
        assert.strictEqual(typeof shortestAndLongest([]), 'function');
    });
    
    it('should return an array of strings', () => {
        assert.strictEqual(
            Array.isArray(shortestAndLongest([''])),
            true
        );
    });

    it('should return an array of strings', () => {
        assert.strictEqual(typeof shortestAndLongest(['candy'])[0], 'string');
    });
    
    it('should return \'love\' and \'confusion\'', () => {
        const actual = shortestAndLongest([
            'love',
            'hunger',
            'confusion'
        ]);
        assert.strictEqual(actual[0], 'love');
        assert.strictEqual(actual[1], 'confusion');
    });
    
    it('should work with empty strings', () => {
        const actual = shortestAndLongest([
            'love',
            'hunger',
            ''
        ]);
        assert.strictEqual(actual[0], '');
        assert.strictEqual(actual[1], 'hunger');
    });
})