declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Chip = "X" | "O" | null;

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
