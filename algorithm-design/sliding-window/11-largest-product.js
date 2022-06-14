// 請寫一個 function，以陣列（皆為數字）和一個正整數 n 為參數，找出 n 個相鄰數字，其乘積為最大值。
// e.g.  largestProduct([1,2,3,4,5,6,7,8,9], 3); // 7*8*9 = 504

function largestProduct(arr, n) {
  if (n > arr.length || arr.length === 0) {
    return null;
  }

  let product = -Infinity;
  let numArr = [];
  let startIndex = 0;
  let endIndex = n - 1;

  while (endIndex < arr.length) {
    let temp = 1;
    for (let i = startIndex; i <= endIndex; i++) {
      temp = temp * arr[i];
    }

    if (temp > product) {
      product = temp;
      numArr = arr.slice(startIndex, endIndex + 1);
    }
    startIndex++;
    endIndex++;
  }

  return [numArr, product];
}

console.log(largestProduct([6, 23, 8, 3, 1, 6, 9, 5, 4], 3)); // [6, 23, 8] 1104
console.log(largestProduct([2, 6, 3, 7, 5, 6, 6, 9, 0, 9, 1, 3, 4, 2, 3, 6, 8, 5, 9], 4)); // [6, 8, 5, 9] 2160
console.log(largestProduct([7, 3, 5, 3], 8)); // null
