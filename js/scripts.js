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
userInfoArray.forEach(function(element){
  if (element === 3) {
    element = "won't you be my neighbor?";
    
  }
  filteredArray.push(element);
})
  return filteredArray;
}

// wonky conditional that breaks out of loop
// but is it still usable?
// if (i === 3) {
//   i = "won't you be my neighbor";
// }