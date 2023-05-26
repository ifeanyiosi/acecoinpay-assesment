import React from "react";
import { ErrorMessage } from "formik";
import { Input, FormItem } from "formik-antd";

interface InputFieldProps {
  label?: string;
  valueProp?: string | number;
  prefix?: React.ReactNode | JSX.Element;
  suffix?: React.ReactNode;
  type?: "text" | "number" | "password";
  name: string;
  placeholder?: string;
  required?: boolean;
  passwordToggle?: boolean;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validInput?: string | number;
  className?: string;
}

const InputField = ({
  label,
  valueProp,
  prefix,
  suffix,
  type = "text",
  name,
  placeholder,
  required,
  passwordToggle,
  disabled,
  maxLength,
  onChange,
  validInput,
  className,
}: InputFieldProps) => {
  switch (type) {
    case "text":
      return (
        <FormItem name={name} label={label} required={required}>
          <Input
            name={name}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            disabled={disabled}
            maxLength={maxLength}
            onChange={onChange}
            value={validInput || valueProp}
            className={className}
          />
          <ErrorMessage
            render={(msg: string) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    case "number":
      return (
        <FormItem name={name} label={label} required={required}>
          <Input
            disabled={disabled}
            placeholder={placeholder}
            name={name}
            prefix={prefix}
            maxLength={maxLength}
            onChange={onChange}
            value={validInput || valueProp}
            suffix={suffix}
          />
          <ErrorMessage
            render={(msg: string) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    case "password":
      return (
        <FormItem name={name} label={label} required={required}>
          <Input.Password
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            visibilityToggle={passwordToggle}
            prefix={prefix}
            suffix={suffix}
            maxLength={maxLength}
            onChange={onChange}
            value={validInput || valueProp}
          />
          <ErrorMessage
            render={(msg: string) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    default:
      return (
        <FormItem name={name} label={label}>
          <Input
            disabled={disabled}
            prefix={prefix}
            suffix={suffix}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            value={validInput || valueProp}
          />
          <ErrorMessage
            render={(msg: string) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
  }
};

export default InputField;
