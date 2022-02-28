function simpleArraySum(ar) {
    let counter = 0;
    for(let i = 0; i <= ar.length; i++){
        if(counter >= 0 && ar[i] <= 1000){
            counter += ar[i]

        }
    }
    return counter
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11, 12]))