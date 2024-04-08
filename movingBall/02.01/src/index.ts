// const userButton = document.getElementById('userButton');
const leftButton = document.getElementById("leftButton") as HTMLButtonElement;
const rightButton = document.getElementById("rightButton") as HTMLButtonElement;
const upButton = document.getElementById("upButton") as HTMLButtonElement;
const downButton = document.getElementById("downButton") as HTMLButtonElement;
const resetButton = document.getElementById("resetButton") as HTMLButtonElement;
const frezeButton = document.getElementById(
  "freezeButton"
) as HTMLButtonElement;
const positionInformation = document.getElementById("position") as HTMLElement;
const circle = document.getElementById("circle") as HTMLDivElement;

circle.style.left = "0";
circle.style.top = "0";

function getNumber(str: string): number[] | null {
  const match = str.match(/\d+/g);
  if (!match) {
    return null;
  }
  return match.map(Number);
}

let xPos = getNumber(circle.style.left);
let yPos = getNumber(circle.style.top);

if (xPos === null || yPos === null) {
  throw new Error("Invalid position value");
}

function setPositionInfo(x: number | null, y: number | null) {
  if (x === null || y === null) {
    throw new Error("Invalid position value");
  }

  positionInformation.innerText = `x: ${x}px, y: ${y}px`;
}

setPositionInfo(xPos[0], yPos[0]);

function* incrementGenerator() {
  while (true) {
    yield Math.floor(Math.random() * 100);
  }
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let horizontalIncrementGenerator = incrementGenerator();
let horizontalIncrement = horizontalIncrementGenerator.next().value;

let verticalIncrementGenerator = incrementGenerator();
let verticalIncrement = verticalIncrementGenerator.next().value;

let isFrozen = false;

const moveLeft = () => {
  if (isFrozen) return;
  const horizontalIncrement = horizontalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  if (xPos === null || yPos === null) {
    throw new Error("Invalid position value");
  }
  if (typeof horizontalIncrement === "number") {
    xPos[0] -= horizontalIncrement;
    if (xPos[0] < 0) {
      xPos[0] = 0;
      circle.style.backgroundColor = "red";
      delay(1000).then(() => {
        circle.style.backgroundColor = "blue";
      });
    }
    circle.style.left = `${xPos[0]}px`;
    setPositionInfo(xPos[0], yPos[0]);
  }
};

const moveRight = () => {
  if (isFrozen) return;
  const horizontalIncrement = horizontalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  if (xPos === null || yPos === null) {
    throw new Error("Invalid position value");
  }
  if (typeof horizontalIncrement === "number") {
    xPos[0] += horizontalIncrement;
    circle.style.left = `${xPos[0]}px`;
    setPositionInfo(xPos[0], yPos[0]);
  }
};

const moveUp = () => {
  if (isFrozen) return;
  const verticalIncrement = verticalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  if (xPos === null || yPos === null) {
    throw new Error("Invalid position value");
  }
  if (typeof verticalIncrement === "number") {
    yPos[0] -= verticalIncrement;
    if (yPos[0] < 0) {
      yPos[0] = 0;
      circle.style.backgroundColor = "red";
      delay(1000).then(() => {
        circle.style.backgroundColor = "blue";
      });
    }
    circle.style.top = `${yPos[0]}px`;
    setPositionInfo(xPos[0], yPos[0]);
  }
};

const moveDown = () => {
  if (isFrozen) return;
  const verticalIncrement = verticalIncrementGenerator.next().value;
  xPos = getNumber(circle.style.left);
  yPos = getNumber(circle.style.top);
  if (xPos === null || yPos === null) {
    throw new Error("Invalid position value");
  }
  if (typeof verticalIncrement === "number") {
    yPos[0] += verticalIncrement;
    circle.style.top = `${yPos[0]}px`;
    setPositionInfo(xPos[0], yPos[0]);
  }
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveLeft();
  if (event.key === "ArrowRight") moveRight();
  if (event.key === "ArrowUp") moveUp();
  if (event.key === "ArrowDown") moveDown();
});

leftButton.addEventListener("click", moveLeft);

rightButton.addEventListener("click", moveRight);

upButton.addEventListener("click", moveUp);

downButton.addEventListener("click", moveDown);

resetButton.addEventListener("click", () => {
  if (isFrozen) return;
  circle.style.left = `0px`;
  circle.style.top = `0px`;
  setPositionInfo(0, 0);
});

frezeButton.addEventListener("click", () => {
  if (!isFrozen) {
    isFrozen = true;
    horizontalIncrementGenerator.return();
    verticalIncrementGenerator.return();
    frezeButton.innerText = "Unfreeze";
  } else {
    isFrozen = false;
    horizontalIncrementGenerator = incrementGenerator();
    verticalIncrementGenerator = incrementGenerator();
    frezeButton.innerText = "Freeze";
  }
});
