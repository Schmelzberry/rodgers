function count(input) {
  let splitInput = input.split(" ");
  let userInfoArray = [];
  for (let i = 1; i <= splitInput; i += 1) {
    userInfoArray.push(i);
  }
  return numReplace(userInfoArray);
}

function numReplace(userInfoArray) {
  let filteredArray = [];
  userInfoArray.forEach(function (element) {
    if (element.toString().includes("3")) {
      element = "won't you be my neighbor?";
      filteredArray.push(element);
    } else if (element.toString().includes("2")) {
      element = "boop";
      filteredArray.push(element);
    } else if (element.toString().includes("1")) {
      element = "beep";
      filteredArray.push(element);
    } else {
    filteredArray.push(element);
    }
  });
  return filteredArray;
}
