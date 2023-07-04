let kg = document.getElementById("kg");
let lb = document.getElementById("lb");
let oz = document.getElementById("oz");

let tokg = () => {
  let kgvalue = kg.value;
  lb.value = (kgvalue * 2.205).toFixed(2);
  oz.value = (kgvalue * 35.274).toFixed(2);
};

let tolb = () => {
  let lbvalue = lb.value;
  kg.value = (lbvalue / 2.205).toFixed(2);
  oz.value = (lbvalue * 16).toFixed(2);
};

let tooz = () => {
  let ozvalue = oz.value;
  kg.value = (ozvalue / 2.205).toFixed(2);
  lb.value = (ozvalue / 16).toFixed(2);
};

kg.addEventListener("input", tokg);
lb.addEventListener("input", tolb);
oz.addEventListener("input", tooz);

window.addEventListener("load", tokg);
