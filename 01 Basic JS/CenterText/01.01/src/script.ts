function centerMultiLineToConsole(input: string): void {
  // Split the input into lines
  const lines = input.split("\n");

  // Find the length of the longest line
  const maxLength = Math.max(...lines.map((line) => line.length));

  // Center each line individually based on the longest line
  lines.forEach((line) => {
    const paddingLength = Math.max(0, (maxLength - line.length) / 2);
    const padding = " ".repeat(paddingLength);
    console.log(padding + line);
  });
}

// Example usage:
const multiLineString = `Line one
Line two is a bit longer
Short
This is the longest line of the string, which should also be centered`;

centerMultiLineToConsole(multiLineString);
