function rodgersCount(input) {
  let splitInput = [parseInt(input)];
  console.log(input);
  let newArray = [];
  splitInput.forEach(function(element) {
    newArray.push(element++);
    });

  return newArray;
}


  // for (let i = 0; i < splitInput; i+=1) {
  //   newArray.push(i.length-1)

  // }