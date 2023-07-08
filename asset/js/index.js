const toggle = document.getElementById("toggle");
const body = document.body;
const fondo = getComputedStyle(document.documentElement).getPropertyValue('--fondo');
const gradiente = getComputedStyle(document.documentElement).getPropertyValue('--gradiente');
toggle.addEventListener("change", function() {
  if (this.checked) {
    document.documentElement.style.setProperty('--gradiente', '#595858');
    document.documentElement.style.setProperty('--fondo', '#2d2c2c');
  } else {
    document.documentElement.style.setProperty('--gradiente', '#fdfdfd');
    document.documentElement.style.setProperty('--fondo', '#e8e8e8');
}});