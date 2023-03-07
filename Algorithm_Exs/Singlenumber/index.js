// Find Single non repeated number
// function findSingleNumber(nums) {
//   const hashTable = {};
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num in hashTable) {
//       hashTable[num]++;
//     } else {
//       hashTable[num] = 1;
//     }
//   }
//   for (let num in hashTable) {
//     console.log(num);
//     if (hashTable[num] === 1) {
//       console.log(parseInt(num));
//     }
//   }
// }
// findSingleNumber([1,2,1,2,4])

// Find the number of duplicated values in array
// function findSingleNumber(nums) {
//   const hashTable = {};
//   let maxRepeatedNum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if (num in hashTable) {
//       hashTable[num]++;
//     } else {
//       hashTable[num] = 1;
//     }
//   }
//   // hashTable[num] => { '1': 3, '2': 2, '3': 1 }\
//   for (let num in hashTable) {
//     if(hashTable[num] > maxRepeatedNum)
//       maxRepeatedNum = hashTable[num]
//   }

//   console.log(`${Object.keys(hashTable).find(key => hashTable[key] === maxRepeatedNum)} : ${maxRepeatedNum}`);
// }
// findSingleNumber([1,2,1,3,1,2,2,2])

