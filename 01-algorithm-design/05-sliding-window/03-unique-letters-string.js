// 請寫一個 function，找出字串中最長不具重複的連續子字串。
// e.g. uniqueLetterString(”thisishowwedoit”);  // [6, “wedoit”]

function uniqueLetterString(str) {
  let startIndex = 0;
  let endIndex = 0;
  let counterObj = {};
  let maxLength = -Infinity;
  let subString = '';

  while (endIndex < str.length) {
    if (counterObj[str[endIndex]]) {
      delete counterObj[str[startIndex]];
      startIndex++;
    } else {
      counterObj[str[endIndex]] = 1;
      endIndex++;
      if (endIndex - startIndex > maxLength) {
        maxLength = endIndex - startIndex;
        subString = str.slice(startIndex, endIndex);
      }
    };
  }

  if (maxLength === -Infinity) {
    return null;
  }

  return [maxLength, subString];
}

console.log(uniqueLetterString("thisishowwedoit")); // 6
console.log(uniqueLetterString("lifeisacircle")); // 6
console.log(uniqueLetterString("")); // null