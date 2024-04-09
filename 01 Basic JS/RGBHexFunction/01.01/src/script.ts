function hexToRGB(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace(/^#/, "");
  const intVal = parseInt(hex, 16);
  const r = (intVal >> 16) & 255;
  const g = (intVal >> 8) & 255;
  const b = intVal & 255;
  return { r, g, b };
}

const hexColor = "#1A2B3C";
const rgbColor = hexToRGB(hexColor); // { r: 26, g: 43, b: 60 }
