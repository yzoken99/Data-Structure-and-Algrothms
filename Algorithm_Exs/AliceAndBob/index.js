
function compareTriplets(a, b) {
    let alice_score = 0;
    let bob_score = 0;
    let result = [];
  
    for (let i = 0; i <= a.length; i++) {
      console.log(a[i], b[i]);
      if (a[i] > b[i]) {
        alice_score++;
      } else if (a[i] < b[i]) {
        bob_score++;
      }
      
    }
    result.push(alice_score);
    result.push(bob_score);
    return result;
  }
  console.log(compareTriplets([17, 28, 30], [99, 16, 8]));


function plusMinus(arr) {
    let posCounter = 0;
    let negCounter = 0;
    let zeroCounter = 0
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > 0){
            posCounter++
        }else if(arr[i] < 0){
            negCounter++
        }else if(arr[i] === 0){
            zeroCounter++
        }

    }
    console.log("Pos", posCounter/arr.length)
    console.log("Neg", negCounter/arr.length)
    console.log("Zeros", zeroCounter/arr.length)
}
plusMinus([-4, 3, -9, 0, 4, 1])
