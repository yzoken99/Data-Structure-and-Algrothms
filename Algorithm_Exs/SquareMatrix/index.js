const arr = [
    [1, 3, 4, 2],
    [4, 5, 3, 5],
    [5, 2, 6, 4],
    [8, 2, 9, 3]
 ];
function diagonalDifference(arr) {
    let leftToRight = 1;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j+=4){
            if(i === j){
                leftToRight += arr[i][j]

            }
        }
    }
    return leftToRight

}
console.log(diagonalDifference(arr))

