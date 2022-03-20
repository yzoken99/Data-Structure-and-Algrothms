function myStrings(str1, str2) {
    let arr1 = str1.split("").sort().join('')
    let arr2 = str2.split("").sort().join('')
    if(arr1 === arr2 && arr1.length === arr2.length){
        return true
    }else{
        return false
    }
}
console.log(myStrings("mite", "time"))