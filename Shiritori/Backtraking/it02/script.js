function m1(arr){
    if (arr.length===0){
        return 0
    }
    let word = ""
    for (let x of arr){
        word = word+x
    }
    return word.length
}

function m2(arr) {
  return arr.length
}

function solution(arr, initArr, m){
    if (arr.length===0) {
        return []
    }
    let bestCandidate = []
    for (let curr of arr) {
        // console.log(`curr ${curr}`);
        const others = initArr.filter(word => curr!==word && curr[curr.length-1]==word[0])
        // console.log(`others ${others} ${others.length}`);
        const candidate = [curr, ...solution(others, initArr, m)]
        // console.log(`candidate ${candidate}`);
        if (m(candidate) > m(bestCandidate)) { 
            bestCandidate = candidate
        }
    }
    // console.log(`bestCandidate ${bestCandidate} ${bestCandidate.length}`)
    return bestCandidate
}

let input = ["apple", "elephant", "radio", "tank"];
const longest = "applElephanTank";
console.log(solution(input, input, m1))

input = ["apple", "elephant", "radio", "tank", "kioto", "obvious"];
console.log(solution(input, input, m1));