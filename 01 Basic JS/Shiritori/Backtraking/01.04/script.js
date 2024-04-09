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

function solution(initArr, m, arr, used) {
  if (arr.length === 0) {
    return [];
  }
  let bestCandidate = [];
  for (let curr of arr) {
    console.log(`curr ${curr}`);
    used.push(curr)
    console.log(`used ${used}`)
    // change the filter
    const others = initArr.filter(
      (word) => !(used.includes(word)) && curr[curr.length - 1] == word[0]
    );
    console.log(`others ${others} ${others.length}`);
    const candidate = [curr, ...solution(initArr, m, others, used)];
    console.log(`candidate ${candidate}`);
    used.pop()
    if (m(candidate) > m(bestCandidate)) {
      bestCandidate = candidate;
    }
  }
  console.log(`bestCandidate ${bestCandidate} ${bestCandidate.length}`)
  return bestCandidate;
}

console.clear()
let input = ["apple", "elephant", "radio", "tank"];
console.log(solution(input, m1, [...input], []));

input = ["apple", "elephant", "radio", "tank", "kioto", "ola"];
console.log(solution(input, m1, [...input], []));
