import React from 'react';
import { FormInputProps } from './formInputTypes';
import './formInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export const FormInput: React.FC<FormInputProps> = ({ value, type, placeholder, onInput, disabled, maxLength, isSuccess, hasError, icon }) => {
  const iconFragment = icon ? <div className="form-input__icon-wrap">
    <FontAwesomeIcon icon={icon} />
  </div> : null;

  let validationClass = isSuccess ? 'success' : '';
  if (hasError) {
    validationClass = 'danger';
  }

  return <div className={`form-input ${validationClass}`}>
    {iconFragment}
    <input
      className="form-input__input"
      value={value}
      maxLength={maxLength || 25}
      type={type}
      placeholder={placeholder}
      onInput={onInput}
      disabled={disabled}
    />
    <div className="form-input__validation-marker success">
      <FontAwesomeIcon icon={faCheck} />
    </div>
    <div className="form-input__validation-marker danger">
      <FontAwesomeIcon icon={faTimes} />
    </div>
  </div>
};

export default FormInput;