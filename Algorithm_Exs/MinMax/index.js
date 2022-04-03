function miniMaxSum (arr){
    let min = arr[0];
    let max = 0;
    let sumMax = 0;
    let minSum = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i]
      }else if(arr[i] < min){
        min = arr[i]
      }
      sumMax += arr[i]
      minSum += arr[i]
    }
    console.log(sumMax-max, minSum-min)
  }
  miniMaxSum([1,2,3,4,5])