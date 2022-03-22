function positiveSum(arr) {
  
    let suma = 0;
  
    for (let i=0; i < arr.length; i++) {
       arr[i] > 0 ? suma += arr[i] : suma += 0;
    }
  return suma;
  }
  