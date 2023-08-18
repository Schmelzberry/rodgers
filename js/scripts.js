function rodgersCount(input) {
  let splitInput = input.split(", ");
  let newArray = [];
  for (let i = 1; i <= splitInput; i+=1) {
      newArray.push(i);
    }
    return newArray;
  }
  