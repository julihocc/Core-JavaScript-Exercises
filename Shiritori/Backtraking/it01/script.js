function maxLen(arr){
    if (arr.length===0) {
        return 0
    }
    const lengths = []
    for (let curr of arr) {
        const others = arr.filter(word => curr!==word && curr[curr.length-1]==word[0])
        let maxLenOthers = maxLen(others)
        console.log(curr, others, maxLenOthers)
        let currMaxLen = curr.length + maxLenOthers 
        lengths.push(currMaxLen)
    }
    return Math.max(...lengths)
}

const input = ["apple", "elephant", "radio", "tank"];
const longest = "applElephanTank";

console.log(maxLen(input))
console.log(longest.length)