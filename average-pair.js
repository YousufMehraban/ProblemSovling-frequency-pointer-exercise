// add whatever parameters you deem necessary
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

function averagePair(arr, avg) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    const middle = (arr[leftIdx] + arr[rightIdx]) / 2;
    if (middle === avg) {
      return true;
    } else if (middle < avg) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }
  return false;
}

function averagePair2(arr, avg) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === avg) return true;
    }
  }
  return false;
}
