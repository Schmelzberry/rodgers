function rodgersCount(input) {
  let splitInput = input.split(" ");
  let userInfoArray = [];
  for (let i = 1; i <= splitInput; i += 1) {

    userInfoArray.push(i);
  }
  let newUserInfoArray = userInfoArray.map(function(element) {
    return element *2;
  })
  return newUserInfoArray;
}

// function numberReplace() {

// }

// wonky conditional that breaks out of loop
// if (i === 3) {
//   i = "won't you be my neighbor";
// }