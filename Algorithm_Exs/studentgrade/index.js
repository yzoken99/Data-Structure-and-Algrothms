function round(grades) {
    // for (let i in grades) {
    //   0 <= grades[i] <= 100;
    //     if ((((Math.ceil(grades[i]/5)*5) - grades[i]) < 3)) {
    //       console.log(Math.ceil(grades[i]/5)*5);
    //     } else if ((((Math.ceil(grades[i]/5)*5) - grades[i]) === 3)) {
    //       console.log(grades[i]);
    //     } else if(grades[i] < 38) {
    //       return grades[i]
    //     }
    // }
  
  
    for(let i in grades) {
      if(grades[i] < 38){
        console.log(grades[i])
      }
      else {
        let arr = [Math.ceil((grades[i]/5)*5)]
        // console.log(arr)
        for(let j in arr){
          if((Math.ceil((grades[i]/5)*5) - grades[i]) < 3){
            console.log(Math.ceil((grades[i]/5)*5))
          }else if((((Math.ceil(grades[i]/5)*5) - grades[i]) === 3)) {
            console.log(grades[i]);
          }
        }
      
      }
    }
  }
  round([73, 67, 38, 33]);
  