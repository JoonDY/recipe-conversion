const vol = document.querySelectorAll(".input-vol");

vol.forEach(x => {
  x.addEventListener('input', convertMetric)
})

function convertMetric(e) {
  let id = e.target.id;
  let val = e.target.value;
  if (id === 'teaspoon') {
    teaspoonConverter(val)
  } else if (id === 'tablespoon') {
    tablespoonConverter(val)
  } else if (id === 'cup') {
    cupConverter(val)
  } else if (id === 'quart') {
    quartConverter(val)
  } else if (id === 'mililiter') {
    mlToAll(val)
  } else if (id === 'liter') {
    literConverter(val)
  }
}

function teaspoonConverter(val) {
  let ml = val * 4.929;
  mlToAll(ml);
}

function tablespoonConverter(val) {
  let ml = val * 14.787;
  mlToAll(ml);
}

function cupConverter(val) {
  let ml = val * 240;
  mlToAll(ml);
}

function quartConverter(val) {
  let ml = val * 960;
  mlToAll(ml);
}

function literConverter(val) {
  let ml = val * 1000;
  mlToAll(ml);
}


function mlToAll(ml) {
  let tsp = ml/4.929;
  let tbs = ml/14.787;
  let cup = ml/240;
  let quart = ml/960
  let liter = ml/1000;

  document.getElementById('teaspoon').value = Math.round(tsp * 100) / 100;
  document.getElementById('tablespoon').value = Math.round(tbs * 100) / 100;
  document.getElementById('cup').value = Math.round(cup * 100) / 100;
  document.getElementById('quart').value = Math.round(quart * 100) / 100;
  document.getElementById('mililiter').value = Math.round(ml * 100) / 100;
  document.getElementById('liter').value = Math.round(liter * 100) / 100;
}
