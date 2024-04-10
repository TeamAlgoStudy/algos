/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

// String?

const bind2dec = (num = '1011011') => {
  let sum = 0;

  for (i = num.length - 1; i >= 0; i--) {
    console.log(i, num.length);
    sum += num[i] === '1' ? 2 ** (num.length - 1 - i) : 0;
  }

  return sum;
};
const binstring = '0011101'

const binToDec = (binString) => +binString.toString()
                                          .split("")
                                          .reduceRight( ( accumulator, currentValue, i) => {
                                            //console.log(`iForward: ${i}, iBackward: ${number2.length - 1 -i} initialAccumulator: ${accumulator}, (2^${i})*${Number(currentValue)}`)
                                                return accumulator + ((Math.pow(2, binString.length - 1 -i)) * Number(currentValue))
                                            },0);
                                            
console.log(binToDec)


console.log(bind2dec());

// formula:  (base*number_position)^base
/*
0  -> 0000  -> 0 is 0
1  -> 0001  -> 1 is 1
2  -> 0010  -> 0010 is 2   F F T F 
3  -> 0011  -> 0011 is 3   (2*(0))^3 + (2*(0))^2 + 2 + 1 = 3
4  -> 0100  -> 0100 is 4   (2*0)^3 + (2*1)^2 + 0 + 0 = 4
5  -> 0101  -> 0101 is 5   (2*0)^3 + (2*1)^2 + 0 + 1 = 4
6  -> 0110  -> 0110 is 6   (2*0)^3 + (2*1)^2 + (2*1)^1 (2*0)^0  = 6
7  -> 0111  
8  -> 1000  
9  -> 1001  -> 1001 is 9   (2*1)^3 + (2*0)^2 + (2*0)^1 (2*1)^0  = 9
10 -> 1010  -> 1010 is 10   (2*1)^3 + (2*0)^2 + (2*1)^1 (2*0)^0  = 10
11 -> 1011  -> 1011 is 11   (2*1)^3 + (2*0)^2 + (2*1)^1 (2*1)^0  = 11
12 -> 1100  
13 -> 1101  
14 -> 1110  
15 -> 1111  -> 1011 is 11   (2*1)^3 + (2*1)^2 + (2*1)^1 (2*1)^0  = 15

1010 1010 -> 1011 is 11   (2*1)^3 + (2*1)^2 + (2*1)^1 (2*1)^0 (2*1)^3 + (2*1)^2 + (2*1)^1 (2*1)^0  = 15

1111 1111 0111 1010 
   F    F    7    9

FF79
*/

/*

Decimal -> 0-9
Binary  -> 0-1
Ternary -> 0-2
4       -> 0-3  ->



 1001
   +1
   


13
14
15
16
17
18
19
20



*/

/*
0  -> 0000  -> 0000 -> 0000  -> 0000  -> 
1  -> 0001  -> 0001 -> 0001  -> 0001
2  -> 0010  -> 0002 -> 0002  -> 0002
3  -> 0011  -> 0010 -> 0003  -> 0003
4  -> 0100  -> 0011 -> 0010  -> 0004
5  -> 0101  -> 0012 -> 0011  -> 0005
6  -> 0110  -> 0020 -> 0012  -> 0006
7  -> 0111  -> 0021 -> 0013  -> 0007
8  -> 1000  -> 0022 -> 0020  -> 0008
9  -> 1001  -> 0100 -> 0021  -> 0009
10 -> 1010  -> 0101 -> 0022  -> 000A
11 -> 1011  -> 0102 -> 0023  -> 000B
12 -> 1100  -> 0110 -> 0030  -> 000C
13 -> 1101  -> 0111 -> 0031  -> 000D
14 -> 1110  -> 0112 -> 0032  -> 000E
15 -> 1111  -> 0120 -> 0033  -> 000F

1111 1111 0111 1010 
   F    F    7    9

FF79
*/
