// let reverseStr = "";
// function Myfuncton(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   if (reverseStr === str) {
//     return reverseStr;
//   } else {
//     return `${str} not palindrome string`;
//   }
// }
// console.log(Myfuncton("leve"));
let reverseNumber = '';
function Mynumber(n){
    let x = n.toString()
    for(let i = x.length-1; i >= 0; i--){
        reverseNumber += x[i]
    }
    let parsedNum = parseInt(reverseNumber)
    if(parsedNum === n){
        return parsedNum
    }else{
        return 0;
    }
}
console.log(Mynumber(459))