// https://www.omnicalculator.com/health/ponderal-index

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ponderalIndexRadio = document.getElementById('ponderalIndexRadio');
const heightRadio = document.getElementById('heightRadio');
const weightRadio = document.getElementById('weightRadio');

let ponderalIndex;
let height = v1;
let weight = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

ponderalIndexRadio.addEventListener('click', function() {
  variable1.textContent = 'Height';
  variable2.textContent = 'Weight';
  height = v1;
  weight = v2;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable1.textContent = 'Ponderal Index';
  variable2.textContent = 'Weight';
  ponderalIndex = v1;
  weight = v2;
  result.textContent = '';
});

weightRadio.addEventListener('click', function() {
  variable1.textContent = 'Ponderal Index';
  variable2.textContent = 'Height';
  ponderalIndex = v1;
  height = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ponderalIndexRadio.checked)
    result.textContent = `Ponderal Index = ${computeponderalIndex().toFixed(2)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(2)}`;

  else if(weightRadio.checked)
    result.textContent = `Weight = ${computeweight().toFixed(2)}`;
})

// calculation

function computeponderalIndex() {
  return Number(weight.value) / Math.pow((Number(height.value) / 100), 3);
}

function computeheight() {
  return (Math.pow(Number(weight.value) / Number(ponderalIndex.value), 1/3)) * 100;
}

function computeweight() {
  return Number(ponderalIndex.value) * Math.pow((Number(height.value) / 100), 3);
}