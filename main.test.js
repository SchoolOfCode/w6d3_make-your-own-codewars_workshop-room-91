//👉 Write your tests below here:

import {score}  from './main.js'

describe('Find the sum of James`s test', function () {
    test('test the sum of James`s exams', function () {
       
        const mentalMathScore = 20;
        const calculatorTestScore = 35;
        const nonCalculatorTestScore = 50;
        const actual = mentalMathScore + calculatorTestScore + nonCalculatorTestScore;
        const expected = score(mentalMathScore,calculatorTestScore,nonCalculatorTestScore);
       // jest.setTimeout(newTimeout)
        expect(actual).toStrictEqual(expected)
        
           
        console.log('this is the actual',actual);
        console.log('this is expected', expected);
    })
})

/*describe("Tests",function score ()  {
    it("test", function score()  {
  test.assertEquals(score(0,0,0), 0)
  test.assertEquals(score(43, 10, 5), 58)
    });
  });*/
  
