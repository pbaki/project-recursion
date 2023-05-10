function fibIteration(n) {
  let arr = [0, 1];
  if (n == 1) {
    arr.pop();
    return arr;
  } else {
    for (let i = 2; i < n; i++) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }
  return arr;
}

//console.log(fibIteration(12));

function fibRec(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    let result = fibRec(n - 1);
    let add = result[result.length - 1] + result[result.length - 2];
    result.push(add);
    return result;
  }
}

//console.log(fibRec(3));
