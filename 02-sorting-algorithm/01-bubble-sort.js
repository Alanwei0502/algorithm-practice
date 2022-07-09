// 請實作一個氣泡排序
function bubbleSorting(arr) {
  let toIndex = 1;
  let startIndex = arr.length - 1;
  while (toIndex < startIndex) {
    let isSwapping = false;
    for (let i = startIndex; i >= toIndex; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
    if (isSwapping) {
      break;
    }
    toIndex++;
  }

  return arr;
}

console.log(bubbleSorting([4, 7, 5, 2, 8, 6, 9, 5, 10]));
console.log(bubbleSorting([5, 4, 3, 2, 1, 0]));
console.log(bubbleSorting([468, 178, 154, 153, 56, 34, 27, 9, 3]));
console.log(bubbleSorting([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// O(n^2)