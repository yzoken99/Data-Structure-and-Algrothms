// function oddNumbers(l, r) {
//   let arr = [];
//   while (l <= r) {
//       arr.push(l);
//       l += 1;
//   };
//   return arr.filter(n => n % 2);
// }
// console.log(oddNumbers(2,5))

// function commonSubstring(a, b) {
//   for(let i = 0; i <= a.length; i++){
//     for(let j = 0; j <= b.length; j++){
//       if(a[i].includes(b[i])){
//         return "YES"
//       }else{
//         return "NO"
//       }
//     }
//   }

// }
// console.log(commonSubstring(["hello", "hi"], ["world", "bye"]))

// function countDuplicates(numbers) {
//   const res = [];
//   let repeatNum = 0
//    for(let i = 0; i < numbers.length; i++){
//       if(numbers.indexOf(numbers[i]) !== numbers.lastIndexOf(numbers[i])){
//          if(!res.includes(numbers[i])){
//             res.push(numbers[i]);
//          };
//       };
//    };
//    for(let j = 0; j <= res.length; j++){
//      if(res[j]){
//        repeatNum ++

//      }
//   }
//   return repeatNum

// }
// console.log(countDuplicates([1,1,2,2,2,3]))

function searchBST(root, val) {
  if (root.key === null)
      return null;

  var nodeKey = parseInt(root.val);
  if (val < nodeKey) {
      return searchBST(root.left, val);
  } else if (val > nodeKey) {
      return searchBST(root.right, val);
  } else {
      return root.value;
  }
}
console.log(searchBST(30,10,12,15))