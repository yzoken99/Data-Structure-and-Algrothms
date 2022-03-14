function miniMaxSum(arr) {
  let maxVal = 0;
  let minVal = 0;
  let minSum = 0;
  let maxSum = 0;
  let res = [];
  for (let i = 0; i <= arr.length; i++) {
      if(arr[i] > maxVal){
          maxVal = arr[i]
          res.push(maxVal)

      }
  }
  for(let j = 0; j <= res.length; j++){
    maxSum += res[j]
  }
  console.log(maxVal);
  console.log(maxSum);
  console.log(res);

}
miniMaxSum([5,8,20,1,2,22])
