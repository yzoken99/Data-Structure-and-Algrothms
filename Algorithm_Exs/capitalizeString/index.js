function myString(str){
    let arrOfStr = str.split(' ')
    let arr = [];
    for(let i = 0; i < arrOfStr.length; i++){
        const word = arrOfStr[i]
        if(word === ''){
            arr.push(word)
        }else{
            arr.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
        }
    }
    return arr.join(' ')
}
console.log(myString("i    am from        uzbekistan"))