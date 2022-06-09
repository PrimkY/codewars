//Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// picture = ["abc",
//     "ded"]
// the output should be
//
// addBorder(picture) = ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]

const rectangularMatrix = (array) => {
    let biggestWord = array.sort((a, b) => b.length - a.length );
    let counter = biggestWord[0].length;
    let asterisk = '*'.repeat(counter + 2);
    return [
        asterisk,
        ...array.map(word => ``),
        asterisk
    ]
}

console.log(rectangularMatrix(["abc", "ded", "war", "asdf", "asdjafdjvskdjb"]));