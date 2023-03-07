var moveZeroes = function(nums) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[index++] = nums[i];
        }
    }
    while (index < nums.length) {
        nums[index++] = 0;
    }
    console.log(nums);
};

moveZeroes([0,1,2,0,3,4]);
