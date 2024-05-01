// Instructions 

/* Write a function that takes a string as its input and returns a new string that contains all of the
letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
Duplicates are fine, so 'exioi' -> 'xoiie'. Test your function using the string
‘supercalifragilisticexpialidocious’. */

const reverseAlphabeticalOrder = str => {
    return str
      .split('')                      // Convert string to array of characters
      .filter(char => /[a-zA-Z]/.test(char))  // Keep only letters
      .sort((a, b) => b.localeCompare(a))     // Sort in reverse alphabetical order
      .join('');                      // Convert array back to string
  };
  
  // Testing the function with the provided string
  console.log(reverseAlphabeticalOrder('supercalifragilisticexpialidocious'));
  