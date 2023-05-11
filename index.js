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

function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  } else {
    //2 trees
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

//console.log(fibonacciRecursive(6));

function fibRec(n) {
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  } else {
    let result = fibRec(n - 1);
    let nextNumber = result[result.length - 1] + result[result.length - 2];
    result.push(nextNumber);
    return result;
  }
}

//console.log(fibRec(3));

function mergeSort(n) {
  let middle = n.length / 2;
  let firstHalf = n.slice(0, middle);
  let secondHalf = n.slice(middle, n.length);
  if (n.length < 2) {
    return n;
  }
  if (n.length > 1) {
    let first = mergeSort(firstHalf);
    let second = mergeSort(secondHalf);
    let finish = merge(first, second);
    return finish;
  }
}

function merge(arr1, arr2) {
  let mergeArr = [];
  while (arr1.length >= 1 && arr2.length >= 1) {
    if (arr1[0] < arr2[0]) {
      mergeArr.push(arr1.shift());
    } else {
      mergeArr.push(arr2.shift());
    }
  }
  if (arr1.length == 0 && arr2.length !== 0) {
    mergeArr = mergeArr.concat(arr2);
  } else if (arr2.length == 0 && arr1.length !== 0) {
    mergeArr = mergeArr.concat(arr1);
  }
  return mergeArr;
}

//console.log(mergeSort([5, 4, 2, 3, 1, 6, 7, 8, 6, 3, 7]));
