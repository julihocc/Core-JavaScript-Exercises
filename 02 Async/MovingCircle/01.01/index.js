const userButton = document.getElementById('userButton');
const userText = document.getElementById('userText');
const circle = document.getElementById('circle');

function* generator() {
  while (true) {
    yield* [1,2,4]
  }
}
  
const gen = generator();

let number = gen.next().value;

function setUsetText(number) {
  userText.innerText = number;
}

setUsetText(number);

function moveCircle(number) {
  circle.style.left = `${100 * number}px`;
}

moveCircle(number);

userButton.addEventListener('click', () => {
  number = gen.next().value
  console.log(number);
  setUsetText(number);
  moveCircle(number);
});

