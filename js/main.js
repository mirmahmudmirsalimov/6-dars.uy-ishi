const elSpeedForm = document.querySelector(".speed-form");
const elInput = document.querySelector("#input")
const elButton = document.querySelector(".speed-form__btn");
const elFoot = document.querySelector(".speed-form__foot");
const elBike = document.querySelector(".speed-form__bike");
const elCar = document.querySelector(".speed-form__car");
const elAirplane = document.querySelector(".speed-form__airplane");

elSpeedForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var InputVal = elInput.value;
    // person
    elFoot.textContent = ` ${Math.floor((InputVal/3.6))} hour
    ${Math.floor(((InputVal/3.6).toFixed(2)-Math.floor((InputVal/3.6)))*60)} min 
    ${Math.floor(60*(((InputVal/3.6).toFixed(2)-Math.floor((InputVal/3.6)))*60-Math.floor(((InputVal/3.6).toFixed(2)-Math.floor((InputVal/3.6)))*60)))} s`;
    // bike
    elBike.textContent = ` ${Math.floor((InputVal/20.1))} hour
    ${Math.floor(((InputVal/20.1).toFixed(2)-Math.floor((InputVal/20.1)))*60)} min 
    ${Math.floor(60*(((InputVal/20.1).toFixed(2)-Math.floor((InputVal/20.1)))*60-Math.floor(((InputVal/20.1).toFixed(2)-Math.floor((InputVal/20.1)))*60)))} s`;
    // car
    elCar.textContent = ` ${Math.floor((InputVal/70))} hour
    ${Math.floor(((InputVal/70).toFixed(2)-Math.floor((InputVal/70)))*60)} min 
    ${Math.floor(60*(((InputVal/70).toFixed(2)-Math.floor((InputVal/70)))*60-Math.floor(((InputVal/70).toFixed(2)-Math.floor((InputVal/70)))*60)))} s`;
    // airoport
    elAirplane.textContent = ` ${Math.floor((InputVal/800))} hour
    ${Math.floor(((InputVal/800).toFixed(2)-Math.floor((InputVal/800)))*60)} min 
    ${Math.floor(60*(((InputVal/800).toFixed(2)-Math.floor((InputVal/800)))*60-Math.floor(((InputVal/800).toFixed(2)-Math.floor((InputVal/800)))*60)))} s`;


    elInput.value = "";
})