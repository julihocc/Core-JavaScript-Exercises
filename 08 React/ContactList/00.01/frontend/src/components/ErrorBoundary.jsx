import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errMsg: null,
    };
    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errMsg: error.message || "unknown error" };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  handleReload() {
    this.props.onReload();
    this.setState({
      hasError: false,
      errMsg: null,
    });
  }

  errorMessage() {
    const { onReload } = this.props;
    return (
      <>
        <h3>{this.state.errMsg}</h3>
        {onReload && <button onClick={this.handleReload}>Reload</button>}
      </>
    );
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.errorMessage();
    }

    return this.props.children;
  }
}
