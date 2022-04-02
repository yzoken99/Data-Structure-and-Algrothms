function miniMaxSum (arr){
  let min = 0;
  let max = 0;
  let sumMax = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
    if(arr[i] === max){
      sumMax += arr[i]

    }
    
    
  }
  return sumMax
}
console.log(miniMaxSum([1,2,3,4,5]))