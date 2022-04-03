// function miniMaxSum (arr){
//   let min = 0;
//   let max = 0;
//   let sumMax = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//       max = arr[i]
//     }
//     if(arr[i] === max){
//       sumMax += arr[i]

//     }
    
    
//   }
//   return sumMax
// }
// console.log(miniMaxSum([1,2,3,4,5]))



function plusMinus(arr) {
  let minusInt = 0;
  let plusInt = 0;
  let zeroInt = 0;
  let arrLength = arr.length
  for(let i = 0; i <= arr.length; i++){
      if(arr[i] > 0){
          plusInt++
      }else if(arr[i] < 0){
          minusInt++
      }else if(arr[i] === 0){
          zeroInt++
      }
  }
  console.log((plusInt/arrLength).toFixed(6).substring(-1) + "\n" +  (minusInt/arrLength).toFixed(6).substring(-1) + "\n" + (zeroInt/arrLength).toFixed(6).substring(-1))

}
plusMinus([1,1,0,-1,-1])