// 請寫一個判斷子序列的函示。
// 子序列是從原始字串中刪除一些字（可以是none）而不干擾剩餘字串的相對位置而形成的新字串。
// 例如：
// isSubsequence(”hello”, “hello world”); true
// isSubsequence(”book”, “brooklyn”); true
// isSubsequence(”abc”, “bac”); false  [order matters]

function isSubsequence(str1, str2) {
  if (str1.length === 0) {
    return true;
  };

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      return true;
    }
    pointer2++;
  }
  return false;
}

const a = isSubsequence("hell", "hello world"); // true
const b = isSubsequence("bok", "brooklyn"); // true
const c = isSubsequence("abc", "bca"); // false