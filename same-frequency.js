// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  if (num1Str.length !== num2Str.length) return false;
  const num1Obj = {};
  const num2Obj = {};

  for (let item of num1Str) {
    num1Obj[item] = num1Obj[item] + 1 || 1;
  }

  for (let item of num2Str) {
    num2Obj[item] = num2Obj[item] + 1 || 1;
  }

  for (let key in num1Obj) {
    if (num1Obj[key] !== num2Obj[key]) return false;
  }
  return true;
}

function FreqObject(num) {
  const result = {};
  const numStr = num.toString();

  for (let x of numStr) {
    result[x] = result[x] + 1 || 1;
  }

  return result;
}

function sameFrequency2(num1, num2) {
  const num1Obj = FreqObject(num1);
  const num2Obj = FreqObject(num2);

  for (let key in num1Obj) {
    if (num1Obj[key] !== num2Obj[key]) return false;
  }
  return true;
}
