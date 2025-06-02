const button = document.getElementById('colorButton');

button.addEventListener('click', function () {
  const colors = ['#FFDDC1', '#C1E1C1', '#C1D4E3', '#F3C1C6', '#E1C1F3'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});