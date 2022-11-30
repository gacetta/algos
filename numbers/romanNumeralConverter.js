/* Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

1-3: base
4-8: mid (next symbol)
9-0: top (which then becomes new base)

*/


//GLOBAL CHECKS
  // if num is > 9999 too big
  // if num is < 0 too small
//CONVERT NUM TO ARRAY OF NUMS (each digit place)  
// num xxxx -> [x, x, x, x]

//CHECK EACH PLACE AND STORE APPROPRIATE STRING

  // THOUSANDS
    // 0 = ' '
   // M for each digit

  // HUNDREDS
    // 0 = ' '
    // 1-3 = (C*num)
    // 4 = CD
    // 5 = D
    // 6-8 = D(C*(num-5))
    // 9 = CM

  // TENS
    // 0 = ' '
    // 1-3 = (X*num)
    // 4 = XL
    // 5 = L
    // 6-8 = L(X*(num-5))
    // 9 = XC 

  // ONES
    // 0 = ' '
    // 1-3 = (I*num)
    // 4 = IV
    // 5 = V
    // 6-8 = V(I*(num-5))
    // 9 = IX

function convertToRoman(num) {
  // global check
  if (num > 9999) return 'Number is too large to convert';
  if (num < 0) return 'Number is too small to convert';
  if (typeof num !== 'number') return 'Argument must be a number';

  // convert number to an array of 4 elements - one for each digit place
  const stringArr = buildStrArr(num)

  
  //check each place and store new value in outputArr
  const outputArr = stringArr.map((elementStr, index) => {
    const elementNum = Number(elementStr)
    return buildNum(index, elementNum);
  })

  return outputArr.join('');

// FUNCTION buildStrArr
// input: num
// output: arr of strings - ['0', '4', '2', '5']
  function buildStrArr(num) {
    let outputArr = [];
    if (num / 1000 < 1) outputArr.push('0');
    if (num / 100 < 1) outputArr.push('0');
    if (num / 10 < 1) outputArr.push('0');
    return [...outputArr, ...num.toString().split('')]
  }


// input: digitsPlace (to determine symbols used), value of the digit place (to determine actual conversion)
// output: converted string

  function buildNum(digitPlace, value) {
    // digitPlace 0 - thousand
    // digitPlace 1 - hundred
    // digitPlace 2 - ten
    // digitPlace 3 - ones
    let oneSymbol = '';
    let fiveSymbol = '';
    let tenSymbol = '';
    let tempStr = ''

    switch(digitPlace) {
      case 1:
        oneSymbol = 'C';
        fiveSymbol = 'D';
        tenSymbol = 'M';
        break;
      case 2: 
        oneSymbol = 'X';
        fiveSymbol = 'L';
        tenSymbol = 'C'
        break;
      case 3:
        oneSymbol = 'I';
        fiveSymbol = 'V';
        tenSymbol = 'X';
        break;
      default:
        oneSymbol = '';
        fiveSymbol = '';
        tenSymbol = '';
    }

    switch(value) {
      case 1:
      case 2:
      case 3:
        for (let i = 0; i < value; i++) {
          tempStr += oneSymbol;
        }
        break;
      case 4:
        tempStr += oneSymbol + fiveSymbol;
        break;
      case 5:
        tempStr += fiveSymbol;
        break;
      case 6:
      case 7:
      case 8:
        tempStr += fiveSymbol;
        for (let i = 0; i < (value - 5); i++) {
          tempStr += oneSymbol;
        }
        break;
      case 9:
        tempStr += oneSymbol + tenSymbol;
        break;
      default:
        tempStr = '';
    }

    // CASE FOR THOUSANDS
    if (digitPlace === 0) {
      for (let i = 0; i < value; i++) {
        tempStr += 'M';
      }
    }

    return tempStr;
  }
}

// console.log(convertToRoman(2)) // II.
// console.log(convertToRoman(3)) // III.
// console.log(convertToRoman(4)) // IV.
// console.log(convertToRoman(5)) // V.
// console.log(convertToRoman(9)) // IX.
// console.log(convertToRoman(12)) // XII.
// console.log(convertToRoman(16)) // XVI.
console.log(convertToRoman(29)) // XXIX.
console.log(convertToRoman(44)) // XLIV.
console.log(convertToRoman(45)) // XLV.
console.log(convertToRoman(68)) // LXVIII
console.log(convertToRoman(83)) // LXXXIII
console.log(convertToRoman(97)) // XCVII
console.log(convertToRoman(99)) // XCIX
console.log(convertToRoman(400)) // CD
console.log(convertToRoman(500)) // D
console.log(convertToRoman(501)) // DI
console.log(convertToRoman(649)) // DCXLIX
console.log(convertToRoman(798)) // DCCXCVIII
console.log(convertToRoman(891)) // DCCCXCI
console.log(convertToRoman(1000)) // M
console.log(convertToRoman(1004)) // MIV
console.log(convertToRoman(1006)) // MVI
console.log(convertToRoman(1023)) // MXXIII
console.log(convertToRoman(2014)) // MMXIV
console.log(convertToRoman(3999)) // MMMCMXCIX