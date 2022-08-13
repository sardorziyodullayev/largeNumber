let theLargestNumber = function (number) {
    let largeNumber = number[0];
    let lessNumber = number[0];
  
    for (let i = 0; i < number.length; i++) {
      if (number[i] > largeNumber) {
        largeNumber = number[i];
      }
      if (number[i] < lessNumber) {
        lessNumber = number[i];
      }
    }
  
    return [largeNumber, lessNumber];
  };
  
  let result = theLargestNumber([10, 24, 4, 32, 50, 47, 1, 9]);
  console.log(result);