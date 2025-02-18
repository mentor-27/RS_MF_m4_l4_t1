import { JSX, ReactNode } from 'react';

export type TJDButtonProps = {
  className?: string;
  children?: string | JSX.Element | ReactNode;
  type?: 'submit' | 'reset' | 'button';
};

export type TJDTextInputProps = {
  className?: string;
  type?: 'text' | 'email' | 'password';
  name?: string;
  value?: string;
  placeholder?: string;
  rightSection?: JSX.Element;
  required?: boolean;
  error?: boolean;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TJDFieldsetProps = {
  className?: string;
  children?: JSX.Element | ReactNode;
  legend?: string | JSX.Element | ReactNode;
};

export type TJDRadioProps = {
  id?: string;
  name?: string;
  value?: string;
  label?: string | JSX.Element | ReactNode;
  defaultChecked?: boolean;
};
