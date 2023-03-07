const containsDuplicate = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i]
        if(element in obj){
            obj[element]++;
        }else{
            obj[element] = 1;
        }
        
    }
    for (const key in obj) {
        if(obj[key] > 1){
            return true
        }
    }
    return false
};
console.log(containsDuplicate([2,14,18,12,12]))