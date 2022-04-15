function cl() {console.clear()};

// Chapter 2
// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

//Mine

// cl();

// let hash = `#`;
// for (i=0; i<6; i++) {
//     console.log(hash);
//     hash +=`#`;
// }
//His
// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

//--------------------------------------------------------------

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

// cl();

// for (i=1; i<=100; i++) 
//     if (i % 3 === 0 && i % 5 === 0) console.log(`FizzBuzz`);
//     else if (i % 3 === 0) console.log(`Fizz`);
//     else if (i % 5 === 0) console.log(`Buzz`);
//     else console.log(i);

//His

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }

//-------------------------------------------------------------------


// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
// console.clear();
// let size = 1;
// let output = ``;
// for (y=1; y<=size; y++) {
//     for (x=1; x<=size; x++) {


//     }
//     output += `\n`;
// }
    

//Ignore mine ----fucked

// console.clear();



// //His

// let size =8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

//cl();
//______________________________________________________________________
// Exercises - functions
// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// // Your code here.

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

//Mine

// function min(a,b) {
//  return (a<b) ? a : b;
// }

// console.log(min(0,10));
// console.log(min(0,-10));

//Mine arrow

// let min = (a,b) => a<b ? a : b;
// console.log(min(0,10));
// console.log(min(0,-10));


// His
// function min(a, b) {
//     if (a < b) return a;
//     else return b;
//   }
  
//   console.log(min(0, 10));
//   // → 0
//   console.log(min(0, -10));
//   // → -10
//------------------------------------------------------------------------
// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// // Your code here.

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

//Mine

// cl();
// function isEven(x) {
//     function zeroOrOne(x) {
//         let y = x;
//         if (y-2===0) return z=true;
//         else if (y-2<=1) return z=false;
//         else if (y<0) return zeroOrOne(-y)
//         return zeroOrOne(y-2);
//     }
//     zeroOrOne(x);
//     return z;
// }
// console.log(isEven(4));    

//His

// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
//   }
  
//   console.log(isEven(50));
//   // → true
//   console.log(isEven(75));
//   // → false
//   console.log(isEven(-1));
//   // → false

// ____________________________________________________________________________________________

// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// // Your code here.

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4


//Mine

// function countBs(word) {
// let count=0;
// for (i=0; i<word.length; i++)
//     if (word[i]==="B") {
//         count++;
//         //console.log(count);
//     }
//     return count;
// }

// console.log(countBs("BBC"));
// //console.log("jeff");

// function countChar(word, letter) {
//     let count = 0;
//     for (i=0; i<word.length; i++)
//     if (word[i]===`${letter}`) {
//         count++;
//         //console.log(count);
//     }
//     return count;
// }

// console.log(countChar('kabckkkbgt','a'));

//His

// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == ch) {
//         counted += 1;
//       }
//     }
//     return counted;
//   }
  
//   function countBs(string) {
//     return countChar(string, "B");
//   }
  
//   console.log(countBs("BBC"));
//   // → 2
//   console.log(countChar("kakkerlak", "k"));
//   // → 4
