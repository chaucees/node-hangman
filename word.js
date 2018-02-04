// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

var letter = require('./letter.js');

function Word(wrd) {
    this.wrd = wrd;
    this.letters = [];
    this.wordFound = false;
}