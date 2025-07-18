import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...props }: Props) => {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${className}`}
    />
  );
};

export default Input;
