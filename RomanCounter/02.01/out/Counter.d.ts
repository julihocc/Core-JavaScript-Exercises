export type Base = "10" | "2" | "8" | "16" | "R";
export default class Counter {
    #private;
    prefix: {
        "10": string;
        "2": string;
        "8": string;
        "16": string;
        R: string;
    };
    constructor(count?: number, step?: number, base?: Base);
    increment(): void;
    decrement(): void;
    random(): void;
    countFormatted(): string;
    reset(): void;
    get count(): number;
    get base(): Base;
    set base(base: Base);
    get step(): number | string;
    set step(step: number | string);
}
//# sourceMappingURL=Counter.d.ts.map