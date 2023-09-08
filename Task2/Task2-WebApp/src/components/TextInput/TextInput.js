import i18n from "@sitevision/api/common/i18n";
import PropTypes from "prop-types";
import * as React from "react";

const TextInput = ({ name, type }) => {
  return (
    <div className="env-form-element">
      <label htmlFor={name} className="env-form-element__label">
        {i18n.get(name)}
      </label>
      <input
        className="env-form-input"
        type={type}
        id={name}
        name={name}
        placeholder={i18n.get(`${name}Placeholder`)}
        required
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;