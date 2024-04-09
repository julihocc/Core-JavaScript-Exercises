function m1(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let word = "";
  for (let x of arr) {
    word = word + x;
  }
  return word.length;
}

function m2(arr) {
  return arr.length;
}

function findNeighbors(arr) {
  const neighbors = new Map();
  for (let word of arr) {
    neighbors.set(word, new Set());
    for (let other of arr) {
      if (other !== word && word[word.length - 1] === other[0]) {
        neighbors.get(word).add(other);
      }
    }
  }
  return neighbors;
}

function solution(state) {
  const { initArr, m, arr, used, notUsed, level, print } = state;
  if (print && level === -1) console.log("Init");
  if (arr.length === 0) {
    return [];
  }
  level++;
  let bestCandidate = [];
  for (let curr of arr) {
    if (print) {
      console.log(`${"\t".repeat(level + 1)}curr ${curr}`);
    }
    used.push(curr);
    if (print) {
      console.log(`${"\t".repeat(level + 1)}used ${used}`);
    }
    const others = initArr.filter(
      (word) => !used.includes(word) && curr[curr.length - 1] == word[0]
    );
    if (print) {
      console.log(`${"\t".repeat(level + 1)}others ${others} ${others.length}`);
    }
    // const state = { initArr, m, arr, used, notUsed, level, print }
    const 
    const candidate = [
      curr,
      ...solution(initArr, m, others, used, notUsed, level, print),
    ];
    if (print) {
      console.log(`${"\t".repeat(level + 1)}candidate ${candidate}`);
    }
    used.pop();
    if (m(candidate) > m(bestCandidate)) {
      bestCandidate = candidate;
    }
  }
  if (print)
    console.log(
      `${"\t".repeat(level)}bestCandidate ${bestCandidate} ${
        bestCandidate.length
      }`
    );
  level--;
  return bestCandidate;
}

console.clear();
let input = ["apple", "elephant", "radio", "tank"];
// { initArr, m, arr, used, notUsed, level, print }
// const state = {input, m1, [...input], [], [...input], -1, true}

const state = {
  initArr: input,
  m: m1,
  arr: [...input],
  user: [],
  notUsed: [...input],
  level: -1,
  print: true,
};

console.log(solution(state));

// input = ["apple", "elephant", "radio", "tank", "kioto", "ola"];
// console.log(solution(input, m1, [...input], [], [...input], -1, false));
