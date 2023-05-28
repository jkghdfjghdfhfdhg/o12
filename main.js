// 1. Функция printArrayValues переписана через рекурсию:


// function printArrayValues(arr, i = 0) {
//   if (i < arr.length) {
//     console.log(arr[i], 'array');
//     printArrayValues(arr, i + 1);
//   }
// }

// printArrayValues([1, 2, 3]);


// 2. Код для поиска всех символов, не являющихся цифрами, в строке:


// const str = "My name 457 is Alex";
// const nonDigits = str.match(/[^0-9]/g);
// console.log(nonDigits);


// 3. Код для поиска всех пробельных символов в строке:


// const str = "Hello\tWorld\nTest";
// const whitespace = str.match(/\s/g);
// console.log(whitespace);


// 4. Функция countChar, которая считает переданный символ в массиве:


// function countChar(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countChar('loremipsumdolor', 'o'));


