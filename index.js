//This was my init answer but this gets refined later on :)

var summation = function (num) {
      for (var i = 1,result = 0; i <= num; i++) {
        result += i;
      }
      
      return result;
    }

    //Test Cases
    console.log(summation(1)) //Expected Result: 1
    console.log(summation(8)) //Expected Result: 36
    console.log(summation(22)) //Expected Result: 253
    console.log(summation(100)) //Expected Result: 5050
    console.log(summation(213)) //Expected Result: 22791



//I was contiplating the math and found an easier solution i remembered from highschool!
// (Plus this is a faster solution)
function summation2(num) {
      return num * (num + 1) / 2
    } 

 //Test Cases
 console.log(summation2(1)) //Expected Result: 1
 console.log(summation2(8)) //Expected Result: 36
 console.log(summation2(22)) //Expected Result: 253
 console.log(summation2(100)) //Expected Result: 5050
 console.log(summation2(213)) //Expected Result: 22791

 //or
const summation3 = n => n * (n + 1) / 2;

 //Test Cases
 console.log(summation3(1)) //Expected Result: 1
 console.log(summation3(8)) //Expected Result: 36
 console.log(summation3(22)) //Expected Result: 253
 console.log(summation3(100)) //Expected Result: 5050
 console.log(summation3(213)) //Expected Result: 22791
