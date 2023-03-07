var majorityElement = function (nums) {
  // dummy solution
  let obj = {};
  let value = 0;
  let key = null;
  for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if(element in obj){
          obj[element]++
      }else{
          obj[element] = 1
      }
      
      if(obj[element] > value){
          value = obj[element]
          key = element
      }
    }
    return typeof key

// more accurate and good performance solution 
//   let obj = {};
//   let maxCount = 0;
//   let maxNum = null;

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     obj[num] = (obj[num] || 0) + 1;

//     if (obj[num] > maxCount) {
//       maxCount = obj[num];
//       maxNum = num;
//     }
//   }

//   return maxNum;
};
console.log(majorityElement([3, 2, 3]));
