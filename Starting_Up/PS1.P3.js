// Instructions 
/* Write a function that accepts two input parameters: a string, and a decorator function. The
function should execute the passed decorator function on the passed string and return the
result.
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
containing fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
This is actually a little tougher than it sounds…a hint would be to take a look at how bit/
character stuffing is done in networking.
For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
contains the original string, the modified string, the total number of As in the modified string,
and the overall length of the modified string:
{
	 	 originalString: xxx,
	 	 modifiedString: xxx,
	 	 numberReplaced: xxx,
	 	 length:		 	 xxx,
}
Print the data from the returned object on the console (console.table would be good for this). */

// Function to apply a decorator to a string
const applyDecorator = (str, decorator) => decorator(str);

// First lambda function to split the string on 'c'
const splitOnC = str => str.split('c');

// Second lambda function to replace 'a' with 'A' and return the required object
const replaceAWithA = str => {
  const modifiedString = str.replace(/a/g, 'A');
  const numberReplaced = modifiedString.split('A').length - 1;
  return {
    originalString: str,
    modifiedString: modifiedString,
    numberReplaced: numberReplaced,
    length: modifiedString.length
  };
};

// Testing the function with 'supercalifragilisticexpialidocious'
console.log(applyDecorator('supercalifragilisticexpialidocious', splitOnC));

// Printing the object for the second expression using console.table
console.table(applyDecorator('supercalifragilisticexpialidocious', replaceAWithA));
