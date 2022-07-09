// 請實作一個插入排序

function insertionSort(arr) {
  let outside = 1;

  for (let i = outside; i < arr.length; i++) {
    let inside = i;

    while (inside > 0) {
      if (arr[inside] > arr[inside - 1]) {
        break;
      }
      [arr[inside - 1], arr[inside]] = [arr[inside], arr[inside - 1]];
      inside--;
    }
  }

  return arr;
}

console.log(insertionSort([4, 1, 2, 5, 7, 3]));
console.log(insertionSort([14, -4, 17, 6, 22, 1, -5]));
console.log(insertionSort([65, 28, 58, 12, 3, 995, 25, -465, 3, -7, 234, 78]));

// O(n^2)