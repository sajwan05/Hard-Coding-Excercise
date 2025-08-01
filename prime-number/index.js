// let n = +prompt("Enter a number: ");

// // let n = +prompt("Enter a number:");

// for ( let i = 0; i <= n; i++) {
//   if ( i === 2) {
//     console.log(`${i} is prime!`);
//   }
  
//   for (let j = 3; j <= n; j++) {
//     if (j !== i ){

//     if ( j % i === 0) {
//         console.log(`${j} is not prime`);
//     }else {
//       console.log(`${j} is prime`);
//       break;
//     }
//   }
// }
// }

// Sieve of erathosthenes:

// // let us find each prime number less than and equal to 30.

// // for ( let i = 2; i <= 30; i++){
// //     // console.log(i);

// //     if ( i % 2 === 0) {
// //         // console.log(2)
// //         continue;
// //     }else if (i % 3 === 0) {
// //         continue;
// //     } else if (i % 5 === 0) {
// //         continue;
// //     } 

// //     console.log(i);
// // }
// let n = +prompt("Enter a number : ");
// let p =2;
// for (let i = 2; i <= n; i++){
//      p = 2;

//     if (i % p === 0) {
      
//         continue;
//     }else if (i % 3 === 0 ) {
        
//         continue;
//     }else if (i % 5 === 0) {
        
//         continue;
//     } else {
        
//         console.log(`${i} is prime`);
//     }

    
// }
// console.log(`${p}, ${++p}, ${p+=2} is prime`);

// console.log(`2 is prime`);
// console.log(`3 is prime`);
// console.log(`5 is prime`);

// for ( let i = 2; i <= n; i++){
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     } else if (i % 2 === 0){
//         continue;
//     }
    
//     for (let j = 3; j <= Math.sqrt(n); j+=2){
//        if (i % j === 0) {
//             continue;
//         } else {
//             console.log(`${i} is prime. `);
//             break ;
//         } 
//     } 
// }

// if i have n let me find if it is prime or not.

// let n = 11;

// for ( let i = 2; i <= n; i++) {
//     if ( n % i === 0) {
//         console.log(`Not Prime`);
//     }
//     console.log(`${n} is prime`);
// }

// isPrime:
// for ( let i = 2; i <= 30; i++) {
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     }else if ( i % 2 === 0) {
//         continue;
//     }

//     for (let j = 3; j <= Math.sqrt(30); j+=2) {
//         if (j % i === 0) {
//             continue;
//         }else {
//             console.log(`${j} `);
//             continue isPrime;
//         }
//     }


// }
// isPrime:
// for (let i = 2; i <= 20; i++) {
//     if (i === 2) {
//         console.log(`${i} is prime.`);
//     }else if (i % 2 === 0) {
//         false;
//     }

//     for (let j = 3; j < 20; j+=2){
//        if (j % i === 0){
//         false;
//        }else if ()
//     }
// }
// let n = 30;

// for ( let i = 2; i <= n; i++) {
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     } else if ( i % 2 === 0){
//         false;
//     }else {
//     for (let j = 3; j < Math.sqrt(n); j+=2 ){
//        if(i % j === 0 && i !== j){
//         // console.log(`${i} is not prime`);
//         continue;
//        } else {
//         console.log(`${i} is prime`);
//        }
//     }  
//  }
        
// }


// let n = 30;

// for ( let i = 2; i <= n; i++) {
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     } else if ( i % 2 === 0){
//         false;
//     }else {
//     for (let j = 3; j < Math.sqrt(n); j+=2 ){
//        if(i % j === 0 && i !== j){
//         console.log(`${i} is not prime`);
//        } else {
//         console.log(`${i} is prime`);
//        }
//     }  
//  }
        
// }


// let n = 30;

// for ( let i = 2; i <= n; i++) {
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     } else if ( i % 2 === 0){
//         false;
//     }else

//     {
//     for (let j = 3; j < Math.sqrt(i); j +=2 ){
//        if(i % j === 0 && i !== j){
//         console.log(`${i} is not prime`);
    
//        } else {
//         console.log(`${i} is prime`);
//         break;
//        }
//     }  
//  }
        
// }
// let n = 30;
// for (let i = 2; i <= n; i++){
//     if (i === 2) {
//         console.log(`2 is prime`);
//     }else if (i % 2 === 0) {
//         false;
//     }else {
//         for (let j = 3; j < i; j+=2){
//             if (i % j === 0 && i !== j) {
//                 // console.log(`${i} is prime`);

//             }else {
//                 console.log(`${i} is prime`);
//             }
//         }
//     }
// }



// // is 29 a prime ;

// let a = 29;
// // check if a is prime/

// let n = 29;

// // check if n is prime 
// outer:
// for ( let i = 2; i < n; i++) {
//     if (n % i === 0) {
//         console.log(`${n} is composite`);
//         console.log(`${n} % ${i} === 0`);
//         break outer;
//         // continue;
//     }else {
//         continue;
//     }
// }

// prime number 2 to n :

// let n = +prompt("Enter a number: ");

// for ( let i = 2; i < n; i++) {
//     if (n % i === 0 ) {
//         // console.log(`${n} is not prime`);
//         continue;
//     } else {
//         console.log(`${n} is prime`);
//     }
// }

// let n = 25;

// for ( let i = 2; i <= n; i++) {
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     } else if ( i % 2 === 0){
//         // false;
//         // break;
//     }else {
//     for (let j = 3; j <= Math.sqrt(n); j+=2 ){
//        if(i % j === 0){
//         console.log(`${i} is not prime`);
//        } else {
//         console.log(`${i} is prime`);
//        }
//     }  
//  }
        
// }

// let n = 15;

// if ( n % 2 === 0) {
//     console.log(`${n} is not prime`);

// } else if ( n % 3 === 0) {
//     console.log(`${n} is not prime`)
// } else if ( n % 5 === 0) {
//     console.log (`${n} is not prime`)
// }else {
//     console.log(`${n} is prime`);
// }

// for (let i = 2 ; i <= 10; i++) {
// //  2 3 4 5 6 7 8 9 10
//     if ( i % 2 === 0 && i !== 2) {
//         console.log(` ${i} Not prime`)
//     }
//     else if (i % 3 === 0 && i !==3) {
//         console.log(`${i} is not prime`);
//     } else {
//         console.log(`${i} is prime`);
//     }
// }

// for (let i = 2; i <= 29; i++) {
//     if (i === 2) {
//         console.log(`${i} is prime.`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} is not prime.`);
//     }else if (i % 3 === 0 && i !== 3) {
//         console.log(`${i} is not prime`);
//     }else if ( i % 5 === 0 && i !== 5) {
//         console.log(`${i} is not prime`);
//     }else {
//         console.log(`${i} is prime`);
//     }
// }

// for (let i = 2; i <= 11; i++) {
    // 1 2 3 4 5 6 7 8 9 10 11

//     if (i === 2) {
//         console.log(`${i} is prime.`);
//     }else if (i % 2 === 0) {
//         console.log(`${i} is not prime.`);
//     } else if (i % 3 === 0 && i != 3) {
//         console.log(`${i} is not prime`);
//     }else {
//         console.log(`${i} is prime`);
//     }
// }

// for (let i = 2; i <= 30; i++) {
//     // 1..... 11 12 13 ....21 22 23 24 25 26 27 28 29 30
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} is not prime.`);
//     } else if ( i % 3 === 0) {
//         console.log(`${i} is not prime.`)
//     }else if ( i % 5 === 0) {
//         console.log(`${i} is not prime`);
//     }else {
//         console.log(`${i} is prime.`)
//     }
// }
// let n = 30;
// for (let i = 2; i <= n; i++) {
//     // 2 3 4 5 6 7 8 9 ....... 11 12 13 14 15 16 17 ......n
//     // let j = 3
//     if (i === 2) {
//         console.log(`${i} is prime.`);
//     }else if (i % 2 === 0) {
//         console.log(`${i} is not prime`);
//     }else { 
//         isPrime = true;
//         for ( j = 3; j <= Math.sqrt(i); j+=2){
//             if (i % j === 0 ){
//                 console.log(`${i} is not prime`);
//                 isPrime = false;
//                 break;
//             } 
//         }
//         if (isPrime){
//             console.log(`${i} is prime`);
//         }  
//     }
// }

let n = +prompt(`Enter the number: `);
for ( let j = 2; j <= n; j++) {
     let result = isPrime(j);
     console.log(`${j} is ${result}`);
}


function isPrime (prime) {
    let i = 3;
    if (prime === 2) {
        return true;
    }else if (prime % 2 === 0) {
        return false;
    } else {
        for (i = 3; i <= Math.sqrt(prime); i+=2){
            if(prime % i === 0) {
                return false;
                // break;
            }
        }
         return true;
    }
}

// let n = 30;
// for (let i = 2; i <= n; i++) {
//     // 2 3 4 5 6 7 8 9 ....... 11 12 13 14 15 16 17 ......n
//     // let j = 3
//     if (i === 2) {
//         console.log(`${i} is prime.`);
//     }else if (i % 2 === 0) {
//         console.log(`${i} is not prime`);
//     }else {
//         isPrime = true;
//         for ( j = 3; j <= Math.sqrt(i); j+=2){
//             if (i % j === 0 && i !== j){
//                 console.log(`${i} is not prime`);
//                 isPrime = false;
//                 break;
//             } 
//         }

//         if(isPrime) {
//             console.log(`${i} is prime.`);
//         }
        
//     }
// }