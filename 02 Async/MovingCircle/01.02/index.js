// const userButton = document.getElementById('userButton');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const resetButton = document.getElementById('resetButton');
const frezeButton = document.getElementById('freezeButton');
const positionInformation = document.getElementById('position');
const circle = document.getElementById('circle');

circle.style.left = 0;
circle.style.top = 0;


function getNumber(str) {
  return str.match(/\d+/g).map(Number);
}

let  xPos = getNumber(circle.style.left);
let  yPos = getNumber(circle.style.top);

function setPositionInfo(x, y) {
  positionInformation.innerText = `x: ${x}px, y: ${y}px`;
}
  setPositionInfo(xPos[0], yPos[0]);

function* incrementGenerator() {
  while (true) {
    yield* [10,20,40]
  }
}
  
let horizontalIncrementGenerator = incrementGenerator();
let horizontalIncrement = horizontalIncrementGenerator.next().value;

let verticalIncrementGenerator = incrementGenerator();
let verticalIncrement = verticalIncrementGenerator.next().value;


leftButton.addEventListener('click', () => {
  horizontalIncrement = horizontalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  xPos[0] -= horizontalIncrement;
  circle.style.left = `${xPos[0]}px`;
  setPositionInfo(xPos[0], yPos[0]);
});

rightButton.addEventListener('click', () => {
  horizontalIncrement = horizontalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  xPos[0] += horizontalIncrement;
  circle.style.left = `${xPos[0]}px`;
  setPositionInfo(xPos[0], yPos[0]);
});

upButton.addEventListener('click', () => {
  verticalIncrement = verticalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  yPos[0] -= verticalIncrement;
  circle.style.top = `${yPos[0]}px`;
  setPositionInfo(xPos[0], yPos[0]);
}); 

downButton.addEventListener('click', () => {
  verticalIncrement = verticalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  yPos[0] += verticalIncrement;
  circle.style.top = `${yPos[0]}px`;
  setPositionInfo(xPos[0], yPos[0]);
}); 

resetButton.addEventListener('click', () => {
  circle.style.left = `0px`;
  circle.style.top = `0px`;
  setPositionInfo(0, 0);
});

let isFrozen = false;

frezeButton.addEventListener('click', () => {
  if (!isFrozen) {
    isFrozen = true;  
    horizontalIncrementGenerator.return();
    verticalIncrementGenerator.return();
    frezeButton.innerText = 'Unfreeze';
  } else {
    isFrozen = false;
    horizontalIncrementGenerator = incrementGenerator();
    verticalIncrementGenerator = incrementGenerator();
    frezeButton.innerText = 'Freeze';
  }
});
