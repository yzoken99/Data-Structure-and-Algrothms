
// Input: nums = [3,1,2,2,2,1,3], k = 2
let countPairs = function(nums, k) {
    nums.sort()
    console.log("nums", nums);
    let counter = 0;
    for(let i = 0; i < nums.length; i++ ){
        for(let j = 1; j < nums.length; j++){
            console.log("J", nums[j]);
            if(nums[i] === nums[j] && (i*j)%k === 0){
                counter++
            }
        }
    }
    return counter;
};
console.log(countPairs(nums = [3,1,2,2,2,1,3], k = 2))