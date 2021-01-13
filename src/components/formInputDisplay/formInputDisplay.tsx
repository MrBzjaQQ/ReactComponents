import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { FormEvent } from 'react';
import FormInput from '../formInput/formInput';
import './formInputDisplay.css';

export const FormInputDisplay : React.FC = () => {
  const onInput = (event: FormEvent<HTMLInputElement>) => {
    console.log('Input handler', event.currentTarget.value);
  };

  return <div className="input-container">
    <div className="input-container__display">
      <FormInput
        icon={faUser}
        type="text"
        placeholder="Type Something Here!"
        onInput={onInput}
        disabled={false}
      />
    </div>
    <div className="input-container__display">
      <FormInput
        icon={faKey}
        type="text"
        placeholder="Type Something Here!"
        onInput={onInput}
        disabled={true}
      />
    </div>
    <div className="input-container__display">
      <FormInput
        type="text"
        value={'Correct!'}
        placeholder="Type Something Here!"
        onInput={onInput}
        disabled={true}
        isSuccess={true}
      />
    </div>
    <div className="input-container__display">
      <FormInput
        type="text"
        value={'Incorrect!'}
        placeholder="Type Something Here!"
        onInput={onInput}
        disabled={true}
        hasError={true}
      />
    </div>
  </div>
};

export default FormInputDisplay;