// 頻率問題（Frequency Problem）寫一個函式，以兩個字串為參數，判斷此兩字串的字母組合是否相同。
// 例如：
// sameFrequency(”abbc”, “aabc”) => false
// sameFrequency(”abba”, “abab”) => true
// sameFrequency(”abcdefgg”, “ggfedcba”) => true

function sameFrequency(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};
  function addCounter(str, counter) {
    for (let i = 0; i < str.length; i++) {
      if (counter[str[i]]) {
        counter[str[i]]++;
      } else {
        counter[str[i]] = 1;
      }
    }
  }
  addCounter(str1, counter1);
  addCounter(str2, counter2);

  for (let property in counter1) {
    if (!counter2[property]) {
      return false;
    }
    if (counter2[property] !== counter1[property]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency("abab", "aabb")); // true
console.log(sameFrequency("dklulh", "ajgiid")); // false

// O(n)