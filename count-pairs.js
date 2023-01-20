// add whatever parameters you deem necessary
function countPairs(arr, num) {
  arr.sort((a, b) => a - b);
  let counter = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === num) {
      counter += 1;
      left += 1;
      right -= 1;
    } else if (sum < num) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return counter;
}
