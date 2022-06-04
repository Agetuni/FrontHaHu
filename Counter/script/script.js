function Increase() {
  var element = document.getElementById("number");
  if (element) {
    var number = parseInt(element.textContent) + 1;
    element.textContent = number;
    element.style.color= DecideColor(number);
  }
}
function Decrease() {
  var element = document.getElementById("number");
  if (element) {
    var number = parseInt(element.textContent) - 1;
    element.textContent = number;
    element.style.color= DecideColor(number);
  }
}
function Reset() {
  var element = document.getElementById("number");
  if (element) {
    element.textContent = 0;
    element.style.color = "Black";
  }
}
function DecideColor(x) {
  if (x > 0) {
    return "Green";
  } else if (x < 0) {
    return "Red";
  } else {
    return "Black";
  }
}
