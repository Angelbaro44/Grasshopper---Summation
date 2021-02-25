# Grasshopper---Summation




Description:
-
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:
-

    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8





Test Cases:
-

    describe('summation', function () {
      it('should return the correct total', function () {
        Test.assertEquals(summation(1), 1)
        Test.assertEquals(summation(8), 36)
        Test.assertEquals(summation(22), 253)
        Test.assertEquals(summation(100), 5050)
        Test.assertEquals(summation(213), 22791)
      })
      it('random numbers test', function () {
        for (var i = 0; i < 100; i++) {
          var rand = Test.randomNumber() + 1
          Test.assertEquals(summation(rand), solution(rand))
        }
      })
      function solution (num) {
        var total = 0
        for (var i = 1; i <= num; i++) {
          total += i
        }
        return total
      }
    })
