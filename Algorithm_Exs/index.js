// function myString(str1, str2){
//     for(let i = 0; i < str1.length; i++){
//         for(let j = 0; j < str1[i].length; j++){
//             for(let m = 0; m < str2.length; m++){
//                 for(let n = 0; n < str2[m].length; n++){
//                     if(str1[i].includes(str2[m][n] || str2[m].includes(str1[i][j]))){
//                         console.log("YES")
//                     }else{
//                         console.log("no")
//                     }
//                 }

//             }

//         }
//     }

// }
// console.log(myString(["hello", "world"], ["level", "asq"]))

// return str1.split('').reduce((acc, val)=> {
//      acc = val + acc
//      return acc
//  },'')

// function maxChar(str){
//     let charObj = {};
//     let maxChar ='';
//     let maxCount = 0;
//     for(let i = 0; i <str.length; i++){
//         const char = str[i]
//         charObj[char] = charObj[char] + 1 || 1
//         console.log("Count char",charObj)
//         if(charObj[char] > maxCount){
//             maxChar = char
//             maxCount = charObj[char]
//         }
//     }

//     return maxChar

// }
// console.log(maxChar("i loveeeeeeee myselfffffffffffffffffffff"))

// function chunkArray(arr, n){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let item = arr[i]
//         let lastArray = result[result.length-1]
//         if(!lastArray || lastArray.length === n){
//             result.push([item])
//         }else{
//             lastArray.push(item)
//         }
//     }
//     return result
// }
// console.log(chunkArray(["a", "b", "c", 'd', 'b', 't', 'y', 'q'], 4))

// function myNumber(n){
//     for(let i = 1; i <= n; i++){
//         let res = ''
//         for(let j = i; j > 0; j--){
//             res += "#"
//         }

//         for(let space = n-1; space > 0; space--){
//             res += ' '
//         }
//         console.log(res)
//     }
// }
// myNumber(4)

// #
// ##
// ###
// ####

// function catAndMouse(...args) {
//     for(let i = 0; i < args.length; i++){
//         for(let j = 1; j < args.length; j++){
//             if(args[i].includes(args[j])){
//                 return true
//             }else{
//                 return false
//             }

//         }
//     }

// }
// console.log(catAndMouse("I love my kids", "nice"))

// function getNames(obj) {
//     let arr = [];
//     for(let i = 0; i < obj.length; i++){
//         arr.push(obj[i].name)
//     }
//     return arr
// }
// console.log("as", getNames([{a:1}, {name:"Jane"},{}, {name:"Mark"}, {name:"Sophia"},{b:2}]))


// function birthday(s, d, m) {
//   let counter = 0;
//   for(let i = 0; i <= s.length; i++){
//     for(let j = 1; j <= s.length; j++){
//       if(d>=1 && d <= 31 && ((s[i] + s[j]) === d) || s[i] === d ){
//         counter++
//         if(m >= 1 && m <= 12 && counter === m){
//           return counter
//         }
//       }
//     }
//   }
//   return counter

// }
// console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7))


function test(arr, num){
  let counter = 0;
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        if(sum === num){
          counter++
          // if(counter === m){
          //   return counter
          // }
        }

  }
  return counter
}
console.log(test([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18))