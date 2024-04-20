//Madrid
//select the element//
let MadridElement = document.querySelector("#Madrid");
//Replace the city and the time//
let MadridDateElement = document.querySelector(".date");
let MadridTimeElement = document.querySelector(".time");
let MadridTime = moment();
//replaced for...//
MadridDateElement.innerHTML = MadridTime.format("MMMM Do YYYY");
MadridTimeElement.innerHTML = `${MadridTime.format("h:mm:ss")}<small>${MadridTime.format("A")}</small>`;

