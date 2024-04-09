"use strict";
function pine(N) {
    for (let i = 1; i <= N; i++) {
        console.log(" ".repeat(N - i) + "*".repeat(1 + 2 * (i - 1)));
    }
}
pine(4);
