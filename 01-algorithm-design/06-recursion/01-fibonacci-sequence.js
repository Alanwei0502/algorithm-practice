// 請寫一個 function，以一個正整數 N 為參數，回傳一個費波那契數列。
// 費波那契數列定義：
// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2) 

function fibonacci(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }

  console.log(arr);
  return arr;
}

fibonacci(4);
fibonacci(13);
