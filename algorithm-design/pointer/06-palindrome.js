// Palindrome（回文）：從左讀到右和從右讀到左都是一樣的。（e.g. “tacocat”, “abccba”）
// 寫一個函式，以字串為參數，判斷此字串是否符合回文。
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (right >= left) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

isPalindrome('tacocat'); // true
isPalindrome('abccba'); // true
isPalindrome('slakgjherih'); // false

// O(n/2)