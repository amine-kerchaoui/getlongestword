let sentence = "Smart people learn from everything and everyone, average people from their experience, experiences stupid people already, have all the answers"

function getLongestWordOnSentence(sentence) {

  let arrayStr = sentence.replace(/[^a-zA-Z0-9\s]/gi, '').split(" ") // Keep only white spaces and alphabetic character
  var longestWordLenght = arrayStr[0].length;
  const FRISTINDEX = 0 
  let arrayStrLengest = []
  var lenghtVowels = arrayStr[0].match(/[aeiou]/gi).length;

  arrayStr.forEach((str) => {
    // Get the new longest word
    if(str.length > longestWordLenght) { 

      longestWordLenght = str.length; // Assign the new longest Word
      lenghtVowels = str.match(/[aeiou]/gi).length // assign the number of Vowels on each Word
      arrayStrLengest[FRISTINDEX] = str; // reassign the current longest Word on the array

    // if there is a new word with same length 
    } else if (str.length == longestWordLenght) {

      // Check if the new word has the highest Vowels number
      if( lenghtVowels < str.match(/[aeiou]/gi).length) {
        arrayStrLengest[FRISTINDEX] = str;
      }

    }
  })

  
  // Display
  console.log(`"${sentence}", \n The Longet Word in the sentence above is, ${arrayStrLengest[0]}`)
  return arrayStrLengest
}

getLongestWordOnSentence(sentence)




