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

function solution(arr, initArr, used, m) {
  if (arr.length === 0) {
    return [];
  }
  let bestCandidate = [];
  for (let curr of arr) {
    console.log(`curr ${curr}`);
    used.push(curr)
    console.log(`used ${used}`)
    const others = initArr.filter(
      (word) => !(used.includes(word)) && curr[curr.length - 1] == word[0]
    );
    // console.log(`others ${others} ${others.length}`);
    const candidate = [curr, ...solution(others, initArr, used, m)];
    used.pop()
    // console.log(`candidate ${candidate}`);
    if (m(candidate) > m(bestCandidate)) {
      bestCandidate = candidate;
    }
  }
  // console.log(`bestCandidate ${bestCandidate} ${bestCandidate.length}`)
  return bestCandidate;
}

let input = ["apple", "elephant", "radio", "tank"];
const longest = "applElephanTank";
console.log(solution(input, input, [], m1));

input = ["apple", "elephant", "radio", "tank", "kioto", "ola"];
console.log(solution(input, input, [], m1));
