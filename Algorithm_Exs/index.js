// function oddNumbers(l, r) {
//   let arr = [];
//   while (l <= r) {
//       arr.push(l);
//       l += 1;
//   };
//   return arr.filter(n => n % 2);
// }
// console.log(oddNumbers(2,5))

// function commonSubstring(a) {
//    for( let i in a){
//        for(let j = 0; j <= a[i].length; j++){
//         console.log(j);
//        }
//    }

// }
// commonSubstring(["hello", "hi"])

// , ["world", "bye"]



let str1 = "Hello"
let str2 = "World"
let res = str1.split('')
function myString(str1){
    // for(let i = str1.length-1; i >=0; i--){
    //     console.log(str1[i]);
    // }

   return str1.split('').reduce((acc, val)=> {
        acc = val + acc
        return acc
    },'')
}
console.log(myString("Hello"))