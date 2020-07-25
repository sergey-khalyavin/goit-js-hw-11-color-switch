import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let intervalId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = () => {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = randomColor;
};

refs.startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;

  intervalId = setInterval(() => {
    changeColor();
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  isActive = false;
});
