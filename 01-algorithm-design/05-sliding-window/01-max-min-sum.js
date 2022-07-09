// Max and Min Sum
// 請寫出兩個 function，以數組陣列長度 n 為參數，計算數組中 n 個連續數字的最大和最小和。
// e.g. 
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

// [Bad solution]
function _maxSum(array, size) {
  let maxSum = -Infinity;
  let startIndex = 0;
  let endIndex = array.length - size;

  if (size > array.length) {
    return null;
  }

  for (let i = startIndex; i <= endIndex; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += array[j];
    }
    if (attempt > maxSum) {
      maxSum = attempt;
    }
  }

  return maxSum;
}

console.log(_maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12


function _minSum(array, size) {
  let minSum = Infinity;
  let startIndex = 0;
  let endIndex = array.length - size;

  if (size > array.length) {
    return null;
  }

  for (let i = startIndex; i <= endIndex; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += array[j];
    }
    if (attempt < minSum) {
      minSum = attempt;
    }
  }

  return minSum;
}

console.log(_minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // -28

// O(n^2)


// 使用sliding window的技巧來優化上述寫法，想法是：第一個 sliding window 是 2+7+3，第二個 sliding window 是 7+3+0，這兩個實際差別也就是 2 和 0，第二個其實是第一個減掉 2 加上 0 的結果。

// [Good solution]
function maxSum(array, size) {
  if (size > array.length) {
    return null
  }

  let maxSum = 0;
  // 先算出第一個 sliding window 的總和
  for (let i = 0; i < size; i++) {
    maxSum += array[i];
  }

  let tempValue = maxSum;
  for (let j = size; j < array.length; j++) {
    tempValue = tempValue - array[j - size] + array[j];
    if (tempValue > maxSum) {
      maxSum = tempValue;
    }
  }

  return maxSum;
}

console.log(maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3)); // 12

// O(n)