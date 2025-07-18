import type { InputHTMLAttributes, ReactNode } from "react";
import Input from "./Input";
import type { FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const FormField = ({ label, error, children, ...inputProps }: Props) => (
  <div>
    <label className="block text-sm font-medium pb-2">{label}</label>
    {children || (
      <Input {...inputProps} className={error ? "border-red-500" : ""} />
    )}
    {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
  </div>
);

export default FormField;
