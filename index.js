// Problem:
// Given: a string input of 2 numbers separated by a space. i.e. "1 10"
// Solve: Find the highest occurring digit of the prime numbers that occur in the range given by the input (inclusive). 

// If multiple digits occur the same highest number of times return the greater. 

// Example 1: for the input "1 10" the highest occurring digit is 7
// Example 2: for the input "1 20" the highest occurring digit is 1


// let str = "1 10";
// return 7
let str = "1 20";
// return 1
// let str = "1 99";
// return 7

const highestOccuringPrimeDigit = (str) => {
    
    let strArr = str.split(" ");
    
    let num1 = parseInt(strArr[0]);
    let num2 = parseInt(strArr[1]);
    let fullRange = [];
    let digitObj = {};
    let highestOccurance = 0;
    let digit = '';

    const isPrime = (n) => {
        if(n == 1){
            return false;
        }
        else{
            for(let i = 2; i < n; i++){
                if(n % i === 0){
                    return false;
                }
            }
            return true;
        }
    }
    

    for(let i=num1; i<=num2; i++){
        if(i == 2 || i == 3 || i == 5){
            fullRange.push(i)
        }
        else if(isPrime(i)){
            fullRange.push(i)
        }
        
    }
    

    let singleDigitArr = fullRange.join('').split('');

    for(let x in singleDigitArr){
        if(!(singleDigitArr[x] in digitObj)){
            digitObj[singleDigitArr[x]] = 1;
        }
        else{
            digitObj[singleDigitArr[x]] += 1;
        }
    }


    for(let key in digitObj){
        if(digitObj[key] > highestOccurance){
            highestOccurance = digitObj[key];
            digit = key
        }
        else if(digitObj[key] == highestOccurance){
            if(key > digit){
                highestOccurance = digitObj[key];
                digit = key
            }
        }
    }
    
    return digit;
}


console.log(highestOccuringPrimeDigit(str));