import { Component } from "react";


export default class Phone extends Component<PhoneProps> {
  constructor(props: PhoneProps) {
    super(props);
  }
  render() {
    const { phone } = this.props;
    const codeArea = phone.substring(0, 3);
    const rest = phone.substring(3);
    return <p>Phone: {`(${codeArea})${rest}`}</p>;
  }
}
