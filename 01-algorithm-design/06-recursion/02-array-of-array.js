// 請寫一個 function，以一個多維陣列為參數，並回傳單維陣列。
// e.g.
// let arrays = [[[[a,[[b,[c]],[d]]],[[e]],[[[f,g,h]]]]]];
// collector(arrays); // [a,b,c,d,e,f,g,h]

function flatArray(arr) {
  let result = [];

  (function collector(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        collector(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  })(arr);

  return result;
}


console.log(flatArray([[[['a', [['b', ['c']], ['d']]], [['e']], [[['f', 'g', 'h']]]]]]));
