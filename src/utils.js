import { evaluate } from 'mathjs/number'
export function isNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}
export const isArithmeticOperator = char => {
  const regOperation = /\+|-|\*|\//
  return regOperation.test(char)
}
export const evalExpression = (expression = '') => {
  // clean expression
  const lastCharacter = expression.charAt(expression.length - 1)
  // remove operators at the end of the expression
  if (isArithmeticOperator(lastCharacter)) {
    // find the last number index
    let index = expression.length - 1
    while (!isNumber(expression.charAt(index)) && index >= 0) {
      index--
    }
    expression = expression.substring(0, index + 1)
  }
  return evaluate(expression)
}
