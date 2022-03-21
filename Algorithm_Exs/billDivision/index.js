function bonAppetit(bill, k, b) {
    let sumOfHonoredBill = 0;
    let sumOfUnhonoredBill = 0;
    for(let i = 0; i < bill.length; i++){
        sumOfUnhonoredBill += bill[i]
    }
    for(let j= 0; j < bill.length; j++){
        if(j !== k){
            sumOfHonoredBill += bill[j]
        }
    }
    if((sumOfUnhonoredBill/2) === b){
        console.log((sumOfUnhonoredBill/2)-(sumOfHonoredBill/2))
    }else {
        console.log("Bon Appetit");
    }

}
bonAppetit([3,10,2,9], 1, 12)