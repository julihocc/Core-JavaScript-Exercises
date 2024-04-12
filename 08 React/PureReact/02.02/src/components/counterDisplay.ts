import React from "react";
import RomanNumerals from "../utils/romanCounter.js";

export default class CounterDisplay extends React.Component<CounterDisplayProps> {
  private converter: RomanNumerals;
  constructor(props: CounterDisplayProps) {
    super(props);
    this.converter = new RomanNumerals();
  }

  render() {
    const count = this.props.count;
    const className = this.props.className;
    const roman = this.converter.toRoman(count);
    return React.createElement(
      "p",
      { className },
      `Count: ${count} (${roman})`
    );
  }
}
