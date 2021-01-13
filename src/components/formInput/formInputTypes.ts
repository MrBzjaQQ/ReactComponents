import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FormEvent } from "react";

export type FormInputProps = {
  type: 'text' | 'password',
  placeholder: string,
  disabled: boolean,

  value?: string,
  maxLength?: number,
  hasError?: boolean,
  isSuccess?: boolean,
  icon?: IconProp,

  onInput: (event: FormEvent<HTMLInputElement>) => void,
};