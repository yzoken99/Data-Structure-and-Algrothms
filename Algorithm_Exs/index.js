// function isSubsequence(s, t) {
//     for(let i = 0; i <= s.length; i++){
//         for(let j = 0; j <=t.length; j++){
//             if(t[j].includes(s[i])){
//                 console.log(s[i]);
//                 console.log(t[j]);
//                 return true
//             }else{
//                 return false
//             }
//         }
//     }
// };
// console.log(isSubsequence("axc", "ahbgdc"))

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

let twoSum = function(nums, target) {
    let result = []
    for(let i = 0; i <= nums.length; i++){
        for(let j = 1; j <= nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i)
                result.push(j)
                return result
            }
        }
    }
};
console.log(twoSum([2,5,5,15], 10))

let isPalindrome = function(x) {
    for(let i = 0; i <= x.toString().length; i++){
        for(let j = x.toString().length-1; j >= 0; j--){
            console.log("Xj", j);
            if(x[i] === x[j]){
                return true
            }else{
                return false
                // console.log(x.toString()[j]);
            }
        }
        
    }
};
// console.log(isPalindrome(121))
console.log(isPalindrome(1000021))