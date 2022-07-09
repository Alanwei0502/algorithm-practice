// 請寫一個 function，以陣列（值皆為正整數）和一個正整數 n 為參數，
// 此 function 會找出總和大於 n 的最短子序列，並回傳此子序列的長度。
// 若找不到此子序列，則回傳 0。
// e.g.
// minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); // 2
// minSubLength([1, 2, 3], 20); // 0


function minSubLength(arr, sum) {
  let startPointer = 0;
  let endPointer = 0;
  let minLength = Infinity;

  while (endPointer <= (arr.length - 1)) {
    let result = 0;
    let tempArray = [];

    for (let i = startPointer; i <= endPointer; i++) {
      result += arr[i];
      tempArray.push(arr[i]);
    }

    if (result >= sum) {
      minLength = tempArray.length;
      startPointer++;
    } else {
      endPointer++;
    }
  }

  if (minLength === Infinity) {
    console.log('Cannot find subArray that can sum up to the given number');
    return 0;
  } else {
    return minLength;
  }
}

console.log(minSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));
console.log(minSubLength([1, 2, 3, 4], 20));
