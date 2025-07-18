import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary";
};

const Button = ({ className = "", variant = "default", ...props }: Props) => {
  const base =
    "px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed";

  const styles = {
    default: "text-black bg-white border border-gray-300 hover:bg-gray-100",
    primary: "text-white bg-black hover:bg-neutral-800",
  };

  return (
    <button {...props} className={`${base} ${styles[variant]} ${className}`} />
  );
};

export default Button;
