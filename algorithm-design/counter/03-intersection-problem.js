// 交集問題（Intersection problem）：寫一個函式，以兩個陣列為參數，最後會回傳一個交集陣列。
// 例如: Intersection([1, 2, 3], [5, 16, 1, 3])，最後回傳[1, 3]。

// [Bad solution]
function _intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  console.log(result);
  return result;
}

_intersection([1, 2, 3, 4, 5, 6], [5, 6, 7, 8]); // [5, 6]

// O(n^2)


// [Good solution: using Counter]
// Counter 是一個很演算法設計常見的技巧，Counter 並不是一個正式的名稱，不同人可能對他有不同的名詞，但概念是一樣的。我們可以利用 Counter 物件來減少演算法的複雜度。
// 概念: 將兩個陣列合併後遍歷一次，計算數字出現過幾次，最後找出出現次數超過兩次的。
function intersection(arr1, arr2) {
  let result = [];
  let arr3 = [...arr1, ...arr2];
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }

  console.log(result);
  return result;
}

intersection([1, 2, 3, 4, 5, 6], [5, 6, 7, 8]); // [5, 6]

// O(n)