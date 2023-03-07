var missingNumber = function(nums) {
    if(nums.length === 1 || !nums.includes(0)) console.log(0); 
    if(!nums.includes(nums.length)) console.log(nums.length); 
    for (let i = 0; i < nums.sort((a,b)=>a-b).length; i++) {
        if((nums[i] + nums[i+1]) % 2 === 0 ) console.log((nums[i] + nums[i+1]) / 2);
    }
};
missingNumber([44,26,34,25,23,42,0,43,38,14,47,19,49,6,16,41,24,35,10,4,32,5,8,15,31,3,46,22,2,30,28,37,1,21,39,45,9,48,36,17,7,27,18,29,13,40,11,20,12])