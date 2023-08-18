function rodgersCount(input) {
  let splitInput = input.split(" ");
  let newArray = [];
  for (let i = 0; i < splitInput; i+=1) {
    newArray.push(i.length-1)
    // return newArray
  }
  return newArray;
}