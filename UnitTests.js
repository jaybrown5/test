import test from 'node:test';
import assert from 'node:assert/strict';
import { capitalizeWords } from './1-CapitalizeWords.js' 

test('', () => {
    assert.equal(capitalizeWords("now is the time"), "Now Is The Time");
});