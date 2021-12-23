//👉 Write your tests below here:

import { score } from './main.js'

describe('Find the sum of James`s test', function () {
  test('test the sum of James`s exams', function () {

    const mentalMathScore = 20;
    const calculatorTestScore = 35;
    const nonCalculatorTestScore = 50;
    const actual = mentalMathScore + calculatorTestScore + nonCalculatorTestScore;
    const expected = score(mentalMathScore, calculatorTestScore, nonCalculatorTestScore);

    expect(actual).toStrictEqual(expected)



  })
})



