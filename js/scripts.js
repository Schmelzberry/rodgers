// Business Logic

// create array of numbers
function count(input) {
  let splitInput = input.split(" ");
  let userInfoArray = [];
  for (let i = 0; i <= splitInput; i += 1) {
    userInfoArray.push(i);
  }
  return numReplace(userInfoArray);
}

// modify array based on numbers present in results
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

// UI Logic

// onload event listener
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", formSubmission);
})

// gather form info
function formSubmission(event) {
  document.querySelector("div#results").removeAttribute("class", "hidden");
  let form = document.querySelector("form")
  let output = document.getElementById("bot-output")
  event.preventDefault();
  const numsToReplace = document.getElementById("bot").value;
  const numsFiltered = count(numsToReplace);

  output.innerHTML = '';
  document.getElementById("bot").innerText = count;
  output.append("Your results are " + numsFiltered);
  form.reset();
  
}






