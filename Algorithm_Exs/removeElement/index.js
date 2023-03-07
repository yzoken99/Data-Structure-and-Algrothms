var removeElement = function(nums, val) {
    for (let i = 0; i <= nums.length; i++) {
        if(nums[i] === val){
            nums.splice(i, 1)
            // i--;
        }
    }
    console.log(nums);    
};
removeElement([7,8,2,2,4,2,3,2,2], 2)
                   