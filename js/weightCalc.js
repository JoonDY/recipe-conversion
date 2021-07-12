const weight = document.querySelectorAll(".input-weight");
let lbs = document.getElementById('pound');
console.log(lbs)

weight.forEach(x => {
  x.addEventListener('input', convertMetric)
})

function convertMetric(e) {
  let id = e.target.id;
  let val = e.target.value;
  if (id === 'ounce') {
    ounceConverter(val)
  } else if (id === 'pound') {
    poundConverter(val)
  } else if (id === 'kilogram') {
    kgConverter(val)
  } else if (id === 'gram') {
    gToAll(val)
  }
}

function ounceConverter(val) {
  let g = val * 28.35;
  gToAll(g);
}

function poundConverter(val) {
  let g = val * 454;
  gToAll(g);
}

function kgConverter(val) {
  let g = val * 1000;
  gToAll(g);
}

function gToAll(g) {
  let oz = g/28.35;
  let lbs = g/454;
  let kg = g/1000;
 

  document.getElementById('ounce').value = Math.round(oz * 100) / 100;
  document.getElementById('pound').value = Math.round(lbs * 100) / 100;
  document.getElementById('kilogram').value = Math.round(kg * 100) / 100;
  document.getElementById('gram').value = Math.round(g * 100) / 100;
}
