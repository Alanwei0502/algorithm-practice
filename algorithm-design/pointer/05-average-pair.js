// 平均配對問題（Average Pair）寫一個函式，以有序陣列和一個數字為參數，回傳有序陣列中所有兩個數的平均值為第二個參數，可能會有很多對。
// 例如：averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)
// 答案：[-11, 14], [0, 3], [1, 2]

// [Bad solution]
function _averagePair(arr, avg) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === avg) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
}

_averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5); // [ [ -11, 14 ], [ 0, 3 ], [ 1, 2 ] ]

// O(n^2)

// 使用Pointer的技巧，但前提是陣列必須是「有序陣列」。
// [Good solution]
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let tempAvg = (arr[left] + arr[right]) / 2;
    if (tempAvg > avg) {
      right--;
    } else if (tempAvg < avg) {
      left++;
    } else if (tempAvg === avg) {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }
  console.log(result);
  return result;
}

averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5); // [ [ -11, 14 ], [ 0, 3 ], [ 1, 2 ] ]

// O(n)