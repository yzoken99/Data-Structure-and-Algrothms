
function aVeryBigSum(ar) {
    let sum = 0;
    for(let i = 0; i <= ar.length; i++){
        if(ar[i] >= 0 && ar[i] <= Math.pow(10, 10)){
            sum += ar[i]
        }
    }
    return sum
}
aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])