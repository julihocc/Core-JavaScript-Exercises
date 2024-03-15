import Graph from "./Graph.js";

class Shiritori extends Graph {
  #words;
  #directory;
  #start = {name:"start", length: 0, toString: () => "start"}
  #end = {name:"end", length: 2, toString: () => "end"}
  constructor(words = []){
    super();
    this.#words = words;
    this.findNeighbors();
    this.buildGraph();
  }
  findNeighbors() {
    this.#directory = new Map();
    this.#directory.set(this.#start, this.#words);
    for (let i = 0; i < this.#words.length; i++) {
      let word = this.#words[i];
      let neighbors = this.#words.filter((w) => w[0] === word[word.length - 1]);
      this.#directory.set(
        word, [...neighbors, this.#end]
      )
    }
  }
  buildGraph() {
    for (let [word, neighbors] of this.#directory) {
      neighbors.forEach((neighbor) => {
        this.addEdge(word, neighbor, neighbor.length-1);
      });
    }
  }
  solution() {
    return this.longestPathBetweenNodes(this.#start, this.#end);
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function glue(arr) {
  let output = "";
  for (let i = 0; i < arr.length - 1; i++) {
    // remove last character
    let word = arr[i].slice(0, -1);
    // console.log(word)
    //capitalize first letter and add
    output += i===0? word : capitalize(word);
  }
  return output + capitalize(arr[arr.length - 1]);
}

// Example Usage:
const graph = new Shiritori(["apple", "elephant", "tank", "radio"]);
console.log("The longest word chain length is " + graph.solution());
console.log(("applElephanTank").length);

// Example 2:
const graph2 = new Shiritori([
  "radio",
  "ola",
  "apple",
  "elephant",
  "tank",
  "kioto",
]);

console.log("The longest word chain length is " + graph2.solution());
const longestChain = ["radio", "ola", "apple", "elephant", "tank", "kioto"];
console.log(glue(longestChain).length);
