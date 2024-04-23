/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, message, onDismiss, onDelete } = this.props;
    return (
      <>
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onDismiss}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{message}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={onDismiss}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
