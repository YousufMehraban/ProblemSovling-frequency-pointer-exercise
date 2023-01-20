// add whatever parameters you deem necessary
function separatePositive(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    if (arr[leftIdx] < 0 && arr[rightIdx] > 0) {
      // swap them
      [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]];
      leftIdx++;
      rightIdx--;
    }
    if (arr[leftIdx] > 0) leftIdx++;

    if (arr[rightIdx] < 0) rightIdx--;
  }

  return arr;
}
