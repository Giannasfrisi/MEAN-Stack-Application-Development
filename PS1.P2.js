// Instructions 
/*Write a function that takes as its input the following formatted strings:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
‘2^8’ (where ^ is exponentiation)
This function should
Determine the operator (+, *, -, ^, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)
You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
always the same length). Write a helper function to parse the expression that uses
destructuring to assign values to left and right. */

const parseExpression = expression => {
    const [left, operator, right] = expression.split('');
    return { left: parseInt(left), operator, right: parseInt(right) };
  };
  
  const evaluate = expression => {
    const { left, operator, right } = parseExpression(expression);
  
    switch (operator) {
      case '+':
        return () => left + right;
      case '-':
        return () => left - right;
      case '*':
        return () => left * right;
      case '/':
        return () => left / right;
      case '^':
        return () => Math.pow(left, right);
      default:
        throw new Error('Invalid operator');
    }
  };
  
  // Testing the function with different expressions
  const expressions = ['4+2', '5*7', '6-1', '9/2', '2^8'];
  expressions.forEach(expression => {
    let operatorFunction = evaluate(expression);
    console.log(`${expression} = ${operatorFunction()}`);
  });
  