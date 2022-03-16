function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let landedApple = 0;
    let landedOrange = 0;
    let appArr = [];
    let orangeArr = [];
    for (let i = 0; i < apples.length; i++) {
      if(a >= 1 && a <= Math.pow(10, 5)){
        appArr.push(a + apples[i]);
      }
    }
    for (let m = 0; m < appArr.length; m++) {
      if (s,t >= 1 && s,t <= Math.pow(10, 5) && appArr[m] >= s && appArr[m] <= t) {
        landedApple += m;
      }
    }
  
    for (let j = 0; j < oranges.length; j++) {
      if(b >= 1 && b <= Math.pow(10, 5)){
        orangeArr.push(b + oranges[j]);
  
      }
    }
  
    for (let n = 0; n < orangeArr.length; n++) {
      if (s,t >= 1 && s,t <= Math.pow(10, 5) && orangeArr[n] > s && orangeArr[n] < t) {
        landedOrange += n;
      }
    }
  
    console.log(appArr);
    console.log(orangeArr);
    console.log("landed apple", landedApple);
    console.log("landed orange", landedOrange);
  }
  countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
  //                    s  t  a  b  apples     oranges
  