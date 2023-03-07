import fs from 'fs';
fs.readFile('file.txt', (err, data) => {
    if (err) throw err;
    let b = data.toString().split('\r\n')
    console.log(b[b.length-1])
})

// Line 1
// Line 2
// Line 3
// Line 4
// Line 5
// Line 6
// Line 7
// Line 8
// Line 9
// Line 10

// var addTwoNumbers = function(l1, l2) {
//     let c = parseInt(l1.join("")) + parseInt(l2.join(""))
//     let newArr = []
//     for (let i = 0; i < c.toString().split("").reverse().length; i++) {
//         const element = c.toString().split("").reverse()[i];
//         newArr.push(parseInt(element))
        
//     }
//     console.log(newArr);

// }
// addTwoNumbers([1,2,3], [4,5,7])

