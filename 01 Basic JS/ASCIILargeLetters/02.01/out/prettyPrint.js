"use strict";
const matrices = {
    H: [
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 1],
    ],
    e: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
    ],
    l: [
        [1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
    ],
    o: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1, 1, 0],
    ],
};
function replace(matrix, one, zero, two = " ") {
    const castMap = new Map();
    castMap.set(1, one);
    castMap.set(0, zero);
    castMap.set(2, two);
    let output = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i].map((value) => castMap.get(value) || "");
        output.push(row);
    }
    return output;
}
function stringify(matrix) {
    let output = "";
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i].join("");
        if (i < matrix.length - 1) {
            row += "\n";
        }
        output += row;
    }
    return output;
}
// console.log(stringify(matrices.H));
// console.log(stringify(matrices.e));
function concatMatrices(...matrices) {
    let output = matrices[0];
    let rest = matrices.slice(1);
    // console.log(stringify(output));
    for (let i = 0; i < output.length; i++) {
        // let row = [...output[i]];
        for (let j = 0; j < rest.length; j++) {
            let newMatrix = rest[j];
            let newRow = newMatrix[i];
            output[i] = [...output[i], " ", ...newRow];
        }
    }
    return output;
}
// const result =concatMatrices(matrices.H, matrices.e, matrices.l, matrices.l, matrices.o);
// console.log(stringify(result));
function prettyPrint(text) {
    let charsAsMatrices = [...text].map((char) => replace(matrices[char], char, " "));
    let result = concatMatrices(...charsAsMatrices);
    console.log(stringify(result));
}
prettyPrint("Hello");
