
// function compareTriplets(a, b) {
//     let alice_score = 0;
//     let bob_score = 0;
//     let result = [];
//     if(a[0] > b[0]){
//         return alice_score++
//     } else if(a[1]===b[1]){
//         return 0;
//     } else if(a[2] < b[2]){
//         return bob_score++
//     }else{
//         console.log("Hi");
//     }
//     result.push(alice_score)
//     result.push(bob_score)
//     console.log("Resukt",result)
// }
// console.log(compareTriplets([1,2,3], [0,1,1]))


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
