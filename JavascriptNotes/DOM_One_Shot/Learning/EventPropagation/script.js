// Event Propagation Example

window.addEventListener("click", function () {
  console.log("Window");
},true);

document.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Document");
},true);

document.querySelector(".div2").addEventListener("click", function () {
  console.log("DIV 2");
}, { once: true }); // This runs only once

document.querySelector(".div1").addEventListener("click", function () {
  console.log("DIV 1");
},true);

document.querySelector(".button").addEventListener("click", function (e) {
  console.log(e.target.innerText = 'clicked!');
},true);

// true matlab upar se neche propagation hu rahi
// false is by default-matlab neche se upar propagation hogi
// to stop it use e.stopPropagation(); jaha rukna hu
//khali ek bar run kerwana hu tu use this  { once: true });