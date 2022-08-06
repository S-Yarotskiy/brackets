module.exports = function check(str, bracketsConfig) {
  bracketsConfig.forEach((e,i,arr) => arr[i] = arr[i].toString().replace(',',''));
  while (bracketsConfig.some(e => str.includes(e))) {
    str = str.replace(bracketsConfig[bracketsConfig.findIndex(el => str.includes(el))], '');
  }
  return str.length === 0;
}
