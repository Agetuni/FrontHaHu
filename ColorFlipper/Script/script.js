const colors = ["Tomato", "Orange", "DodgerBlue", "MediumSeaGreen","Grey", "SlateBlue","Violet","LightGray"];
const hexas = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// change colors from color
function changeColor() {
  let random = getRandomColor(colors.length);
  document.getElementById("color").textContent=colors[random];
  document.body.style.backgroundColor = colors[random];
}
function changeHexColor(){
    let hexColor= "#";
    for(let i=0; i<6; i++){
        hexColor+= hexas[getRandomColor(hexas.length)];
    }
    document.getElementById("color").textContent=hexColor;
    document.body.style.backgroundColor= hexColor;
}
// get random number
function getRandomColor(length) {
  return Math.floor(Math.random() * length);
}
