
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const addition = (a: number, b: number): number => a + b;

// myFunction(1,2)
// Expected
// 3

console.log(addition(1, 2));

// myFunction(1,10)
// Expected
// 11

console.log(addition(1, 10));

// myFunction(99,1)
// Expected
// 100

console.log(addition(99, 1));



// Write a function that takes a value as argument
// Return the type of the value

const typeArg = (a: any): string => typeof a;

// myFunction(1)
// Expected
// 'number'

console.log(typeArg(1));

// myFunction(false)
// Expected
// 'boolean'

console.log(typeArg(false));

// myFunction({})
// Expected
// 'object'

console.log(typeArg({}));

// myFunction(null)
// Expected
// 'object'

console.log(typeArg(null));

// myFunction('string')
// Expected
// 'string'

console.log(typeArg('string'));

// myFunction(['array'])
// Expected
// 'object'

console.log(typeArg(['array']));


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type


function compareNum(a: any, b: any): boolean {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

// myFunction(2, 3)
// Expected
// false 

console.log(compareNum(2, 3));

// myFunction(3, 3)
// Expected
// true 

console.log(compareNum(3, 3));

// myFunction(1, '1')
// Expected
// false 

console.log(compareNum(2, '3'));

// myFunction('10', '10')
// Expected
// true

console.log(compareNum('10', '10'));




// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const outputChar = (a: string, n: number): string => a.charAt(n - 1);

// myFunction('abcd',1)
// Expected
// 'a'

console.log(outputChar('abcd', 1));

// myFunction('zyxbwpl',5)
// Expected
// 'w'

console.log(outputChar('zyxbwpl', 5));

// myFunction('gfedcba',3)
// Expected
// 'e'

console.log(outputChar('gfedcba', 3));




// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const sliceStringEnd = (a: string): string => a.slice(3);

// myFunction('abcdefg')
// Expected
// 'defg'

console.log(sliceStringEnd('abcdefg'));

// myFunction('1234')
// Expected
// '4'

console.log(sliceStringEnd('1234'));

// myFunction('fgedcba')
// Expected
// 'dcba'

console.log(sliceStringEnd('fgedcba'));




// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

const sliceStringStart = (a: string): string => a.slice(-3);

// myFunction('abcdefg')
// Expected
// 'efg'

console.log(sliceStringStart('abcdefg'));

// myFunction('1234')
// Expected
// '234'

console.log(sliceStringStart('1234'));

// myFunction('fgedcba')
// Expected
// 'cba'

console.log(sliceStringStart('fgedcba'));





// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

const sliceStringCut = (a: string): string => a.slice(0,3);

// myFunction('abcdefg')
// Expected
// 'abc'

console.log(sliceStringCut('abcdefg'));

// myFunction('1234')
// Expected
// '123'

console.log(sliceStringCut('1234'));

// myFunction('fgedcba')
// Expected
// 'fge'

console.log(sliceStringCut('fgedcba'));




// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

const sliceStringFirstHalf = (a: string): string => a.slice(0,a.length/2);

// myFunction('abcdefgh')
// Expected
// 'abcd'

console.log(sliceStringFirstHalf('abcdefgh'));

// myFunction('1234')
// Expected
// '12'

console.log(sliceStringFirstHalf('1234'));

// myFunction('gedcba')
// Expected
// 'ged'

console.log(sliceStringFirstHalf('gedcba'));





// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

const sliceStringLessBy3 = (a: string): string => a.slice(0,a.length-3);

// myFunction('abcdefg')
// Expected
// 'abcd'

console.log(sliceStringLessBy3('abcdefg'));

// myFunction('1234')
// Expected
// '1'

console.log(sliceStringLessBy3('1234'));

// myFunction('fgedcba')
// Expected
// 'fged'

console.log(sliceStringLessBy3('fgedcba'));





// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

const percentageOf = (a: number, b:number): number => a * (b/100);

// myFunction(100,50)
// Expected
// 50

console.log(percentageOf(100,50));

// myFunction(10,1)
// Expected
// 0.1

console.log(percentageOf(10,1));

// myFunction(500,25)
// Expected
// 125

console.log(percentageOf(500,25));




// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

const boringMath = (a: number, b: number, c:number, d:number, e:number, f:number): number => ((((a+b)-c)*d)/e)**f;

// myFunction(6,5,4,3,2,1)
// Expected
// 10.5

console.log(boringMath(6,5,4,3,2,1));

// myFunction(6,2,1,4,2,3)
// Expected
// 2744

console.log(boringMath(6,2,1,4,2,3));

// myFunction(2,3,6,4,2,3)
// Expected
// -8

console.log(boringMath(2,3,6,4,2,3));





// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function oddOrEven(a: number): boolean {
    if (a%2 === 0) {
        return true;
    } else {
        return false;
    }
}

// myFunction(10)
// Expected
// true

console.log(oddOrEven(10));

// myFunction(-4)
// Expected
// true

console.log(oddOrEven(-4));

// myFunction(5)
// Expected
// false

console.log(oddOrEven(5));

// myFunction(-111)
// Expected
// false

console.log(oddOrEven(-111));





// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function occurence(a:string, b:string): number {
    let count = 0;

    for (let i = 0; i < b.length; i++){
        if (b[i] === a){
            count++;
        }
    }
    return count;
}


// myFunction('m', 'how many times does the character occur in this sentence?')
// Expected
// 2

console.log(occurence('m', 'how many times does the character occur in this sentence?'));

// myFunction('h', 'how many times does the character occur in this sentence?')
// Expected
// 4

console.log(occurence('h', 'how many times does the character occur in this sentence?'));

// myFunction('?', 'how many times does the character occur in this sentence?')
// Expected
// 1

console.log(occurence('?', 'how many times does the character occur in this sentence?'));

// myFunction('z', 'how many times does the character occur in this sentence?')
// Expected
// 0

console.log(occurence('z', 'how many times does the character occur in this sentence?'));





// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

const checkIfInteger = (x: number): boolean => Number.isInteger(x);

// myFunction(4)
// Expected
// true 

console.log(checkIfInteger(4));

// myFunction(1.123)
// Expected
// false 

console.log(checkIfInteger(1.123));

// myFunction(1048)
// Expected
// true 

console.log(checkIfInteger(1048));

// myFunction(10.48)
// Expected
// false

console.log(checkIfInteger(10.48));




// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function divOrMultiply(a: number, b: number):number {
    if (a<b) {
        return a/b;
    } else {
        return a*b;
    }
}

// myFunction(10, 100)
// Expected
// 0.1

console.log(divOrMultiply(10, 100));

// myFunction(90, 45)
// Expected
// 4050

console.log(divOrMultiply(90, 45));

// myFunction(8, 20)
// Expected
// 0.4

console.log(divOrMultiply(8, 20));

// myFunction(2, 0.5)
// Expected
// 1

console.log(divOrMultiply(2, 0.5));




// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function concatenate(a:string, b: string):string {
    if (a.includes(b)){
        return b+a;
    } else {
        return a+b;
    }
}

// myFunction('cheese', 'cake')
// Expected
// 'cheesecake'

console.log(concatenate('cheese', 'cake'));

// myFunction('lips', 's')
// Expected
// 'slips'

console.log(concatenate('lips', 's'));

// myFunction('Java', 'script')
// Expected
// 'Javascript'

console.log(concatenate('Java', 'script'));

// myFunction(' think, therefore I am', 'I')
// Expected
// 'I think, therefore I am'

console.log(concatenate(' think, therefore I am', 'I'));
