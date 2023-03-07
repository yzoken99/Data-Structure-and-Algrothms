const searchInsert = function(nums, target) {
   if(nums.includes(target)) return nums.indexOf(target)
    return [...nums, target].sort((a,b)=> a-b).indexOf(target)
};
console.log(searchInsert([1,3,4,5], 2));