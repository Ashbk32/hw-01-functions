/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

// Add your code above this line

function blackJack(playerCardScore, dealerCardScore) {
    const MAX = 21;
    if(playerCardScore > MAX && dealerCardScore > MAX){
        return 0;
    } else {
        if(playerCardScore >= playerCardScore && dealerCardScore <= MAX || dealerCardScore > MAX){
            return playerCardScore;
        } else {
            return dealerCardScore;
        }
    }
}
const result =  blackJack(21, 21)
console.log (result)
/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6


3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 2:')

// Add your code below this line



function wordCount(phrase){
  let obj={};
  phrase.split(" ").forEach(function(el,i,arr){
    obj[el]=  obj[el]? ++obj[el]: 1;
  });
  return obj;
}
console.log(wordCount("olly olly in come free"));



// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 3:')

// Add your code below this line

const word = "function"
const scoreKey = {a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10}

function scrabbleScore(word) {


const wordArray = word.split ('')
let score = 0

wordArray.forEach(letter => {

score = score + scoreKey[letter]
});

 return score

}
console.log(scrabbleScore("function"))

  }



const sum = [...word].reduce((accu, letter) => { return accu + scrabble[letter.toLowerCase()]; }, 0);

}
  return results

}

  console.log(scrabbleScore("cabbage"))
// Add your code above this line


/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 4:')

// Add your code below this line

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 5:')

// Add your code below this line




function doubleLetters(word) {
 // split the word into an array of Letters

 const letters = word.split('')
 console.log(letters)

 // loop through array of doubleLetters
 //check if each letter is the same as the next letter
 // in the sequence

  let results = false

 letters.forEach((letter, index) => {
   // check if current letter is the same as the next letter
   console.log(`letter: ${letter}`)
   console.log(`index: ${index}`)

   if (letter === letters[index + 1]) {
     conole.log('we have a match')
     result = true

   }
 })


    return result
  }

  console.log(doubleLetters('rune'))



// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
