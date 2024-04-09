// function pine(N) {
//   for (let i = 1; i <= N; i++) {
//     console.log(" ".repeat(N - i) + "*".repeat(1 + 2 * (i - 1)));
//   }
// }

function diamond(N) {
  console.log(" ".repeat(N) + "*");
  for (let i = 1; i <= N-1; i++) {
    console.log(" ".repeat(N - i) + "*" + " ".repeat(-1 + 2 * i) + "*");
  }
  for (let i = N-2; i >= 1; i--) {
    console.log(" ".repeat(N - i) + "*" + " ".repeat(-1 + 2 * i) + "*");
  }
  if(N>1) console.log(" ".repeat(N) + "*");
}

diamond(4);
