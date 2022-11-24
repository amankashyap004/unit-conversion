const convertBtn = document.getElementById("convert-btn");
// const userInput = document.getElementsByClassName('user-input')
const inputValue = document.getElementById("input-value");

const meterToFeet = document.getElementById("meter-to-feet");
const feetToMeter = document.getElementById("feet-to-meter");

const literToGallon = document.getElementById("liter-to-gallon");
const gallonToLiter = document.getElementById("gallon-to-liter");

const kilogramToPound = document.getElementById("kilogram-to-pound");
const poundToKilogram = document.getElementById("pound-to-kilogram");

let getInputValue = "";

convertBtn.addEventListener("click", () => {
  getInputValue = inputValue.value;
  if (inputValue.value != "") {
    inputValue.value = "";
  }

  // for (let i=0; i<userInput.length; i++){
  //     let x = userInput[i]
  //     x.textContent = getInputValue +" "
  // }

  feetToMeterFun();
  meterToFeetFun();

  literToGallonFun();
  gallonToLiterFun();

  kilogramToPoundFun();
  poundToKilogramFun();
});

//Length
function meterToFeetFun() {
  let meter = getInputValue;
  let feet = 3.28084;
  let value = meter * feet;
  let roundOff = Math.round(value * 1000) / 1000
  meterToFeet.textContent = `${getInputValue} Meters = ${roundOff} Feet`;
}

function feetToMeterFun() {
  let feet = getInputValue;
  let meter = 0.3048;
  let value = meter * feet;
  let roundOff = Math.round(value * 1000) / 1000
  feetToMeter.textContent = `${getInputValue} Feet = ${roundOff} Meters`;
}

//Volume
function literToGallonFun() {
  let liter = getInputValue;
  let gallon = 0.264172;
  let value = liter * gallon;
  let roundOff = Math.round(value * 1000) / 1000
  literToGallon.textContent = `${getInputValue} Liters = ${roundOff} Gallons`;
}
function gallonToLiterFun() {
  let gallon = getInputValue;
  let liter = 3.78541;
  let value = liter * gallon;
  let roundOff = Math.round(value * 1000) / 1000
  gallonToLiter.textContent = `${getInputValue} Gallons = ${roundOff} Liters`;
}

//Mass
function kilogramToPoundFun() {
  let kilogram = getInputValue;
  let pound = 2.20462;
  let value = kilogram * pound;
  let roundOff = Math.round(value * 1000) / 1000
  kilogramToPound.textContent = `${getInputValue} Kilograms = ${roundOff} Pounds`;
}
function poundToKilogramFun() {
  let pound = getInputValue;
  let kilogram = 0.453592;
  let value = kilogram * pound;
  let roundOff = Math.round(value * 1000) / 1000
  poundToKilogram.textContent = `${getInputValue} Pounds = ${roundOff} Kilograms`;
}

// function multiply(getInputValue, toConvert) {
//   let value = getInputValue * toConvert;
//   return value;
// }




