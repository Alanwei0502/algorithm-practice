// 二元搜尋法不需要把集合中的元素一個一個拿出來判斷，因為它所搜尋的集合必須是已經排序好的序列，所以可以直接利用元素的大小來決定下次要尋找的位置。

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  let step = 0;

  while (min <= max) {
    step++;
    const mid = Math.floor((min + max) / 2);
    if (num > arr[mid]) {
      min = mid + 1;
    } else if (num < arr[mid]) {
      max = mid - 1;
    } else if (num === arr[mid]) {
      console.log(`Found number ${num} at position ${mid} after taking ${step} steps.`);
      return mid;
    }
  }
  console.log("Can't not find number " + num);
  return -1;
}

binarySearch(numbers, 3); // Found number 3 at position 2 after taking 3 steps.
binarySearch(numbers, 15); // Can't not find number 15

// O(log n)