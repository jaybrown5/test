function capitalizeWords(str) {
    var words = str.split('');
    for (i = 0; i < words.length; i++) {
        firstChar = words[i].substring(0).toUpperCase();
        words[i] = firstChar + words[i].substring(1).toLowerCase();
    }
    return words.join(' ');
}

var userInput = prompt("Enter a string: ");
console.log("\n",capitalizeWords(userInput)); 