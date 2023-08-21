// Business Logic
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

// UI Logic
function formSubmission(event) {
  let form = document.querySelector("form")
  let output =  document.getElementById("bot-output")
  event.preventDefault();
  const numsToReplace = document.getElementById("bot").value;
  const numsFiltered = count(numsToReplace);
  document.getElementById("bot").innerText = count;
  output.append("Beepity Boopity, here's your results: " + numsFiltered);
  form.reset();
}

function refreshFormResults() {
  if (document.querySelector("input").innerText !== "") {
    console.log("it works")
  document.getElementById("bot-output").innerText = "";
  }
 
}


// function clickHappened() {
//   let button = document.querySelector("button");
//   button.addEventListener("click", refreshFormResults);
// }


window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", formSubmission);
})



