// 線性搜尋(Linear Search)演算法又稱為循序搜尋(Sequential Search)演算法，是學習程式語言最先需要學會的搜尋演算法。它可以按照元素在集合中的順序，從頭開始進行走訪，並連續判斷目前走訪到的元素是否為我們想要找的元素。

let numbers = [34, 75, 98, 43, 22, 33, 80, 39, 47, 25, 22, 14, 8, 7, 9, 3, 1];

function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      console.log("Found number " + n + " at Index " + i);
      return arr[i];
    }
  }
  console.log("Cannot find " + n);
  return -1;
}

const index1 = linearSearch(numbers, 33); //Found number 33 at Index 5
const index2 = linearSearch(numbers, 5); //Cannot find 5

console.log({ index1, index2 }); // { index1: 33, index2: -1 }

// O(n)