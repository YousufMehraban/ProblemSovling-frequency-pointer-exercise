// add whatever parameters you deem necessary

function constructNote(str, message) {
  let strObj = {};
  let messageObj = {};

  for (let letter of str) {
    strObj[letter] = strObj[letter] + 1 || 1;
  }
  for (let letter of message) {
    messageObj[letter] = messageObj[letter] + 1 || 1;
  }

  for (let key in strObj) {
    if (!messageObj[key]) return false;
    if (strObj[key] > messageObj[key]) {
      return false;
    }
  }
  return true;
}
