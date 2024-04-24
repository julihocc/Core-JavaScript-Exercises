import React from "react";
import PropTypes from "prop-types";

function Phone({ phone }) {
  const codeArea = phone.substring(0, 3);
  const rest = phone.substring(3);

  return (
    <p>
      Phone: ({codeArea}){rest}
    </p>
  );
}

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
};

export default Phone;
