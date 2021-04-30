// This problem took roughly an hour to complete. 

// Problem:
// Given: a string input of 2 numbers separated by a space. i.e. "1 10"
// Solve: Find the highest occurring digit of the prime numbers that occur in the range given by the input (inclusive). 

// If multiple digits occur the same highest number of times return the greater. 

// Example 1: for the input "1 10" the highest occurring digit is 7
// Example 2: for the input "1 20" the highest occurring digit is 1


// let str = "1 10";
// return 7
// let str = "1 20";
// let str= "2252 2261"
let str= "0 1"
// return 1
// let str = "1 99";
// return 7

const highestOccuringPrimeDigit = (str) => {
    // split string on the space to make array
    let strArr = str.split(" ");
    
    let num1 = parseInt(strArr[0]);
    let num2 = parseInt(strArr[1]);
    let fullRange = [];
    let digitObj = {};
    // let highestOccurance = 0;
    // let digit = '';

    // isPrime function
    const isPrime = (n) => {
        if(n == 1 || n== 0){
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
    
    // checks numbers in the range between num1 and num2
    // i is pushed to the fullRange array if it is a prime number
    for(let i=num1; i<=num2; i++){
        if(i == 2 || i == 3 || i == 5){
            fullRange.push(i)
        }
        else if(isPrime(i)){
            fullRange.push(i)
        }
        
    }
    
    if (fullRange.length == 0){
        return "No primes in string"
    }

    // this joins all prime numbers then splits them so each digit has its own index
    let singleDigitArr = fullRange.join('').split('');

    // pushes digits to an object where it tracks the occurance of each number
    for(let x in singleDigitArr){
        if(!(singleDigitArr[x] in digitObj)){
            digitObj[singleDigitArr[x]] = 1;
        }
        else{
            digitObj[singleDigitArr[x]] += 1;
        }
    }

    // this finds the digit with the highest occurance from digitObj
    // if two digits have the same occurrance, it returns the greater digit
    
    // for(let key in digitObj){
    //     if(digitObj[key] > highestOccurance){
    //         highestOccurance = digitObj[key];
    //         digit = key
    //     }
    //     else if(digitObj[key] == highestOccurance){
    //         if(key > digit){
    //             highestOccurance = digitObj[key];
    //             digit = key
    //         }
    //     }
    // }

    // return digit;

    const findHighestOccurance = (digitObj) => {
        let highestOccurance = 0;
        let digit = '';

        for(let key in digitObj){
            if(digitObj[key] > highestOccurance){
                highestOccurance = digitObj[key];
                digit = key
            }
            else if(digitObj[key] == highestOccurance){
                if(key > digit){
                    digit = key
                }
            }
        }

        return digit;

    }
    
    
    return findHighestOccurance(digitObj);

}


console.log(highestOccuringPrimeDigit(str));