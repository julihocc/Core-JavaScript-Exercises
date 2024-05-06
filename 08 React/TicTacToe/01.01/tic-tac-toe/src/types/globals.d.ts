type SquareProps = {
  value: string;
  onClick: () => void;
};

type Index = number;

type BoardProps = {
  squares: string[];
  onClick: (i: Index) => void;
};