import { Link } from "react-router-dom";
import { forwardRef } from "react";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ to, children, variant = "primary", className = "" }, ref) => {
    const baseStyle =
      "px-3 sm:px-4 py-2.5 font-poppins text-[20px] rounded transition-colors";
    const styles = {
      primary: "bg-[#FB8A00] text-white hover:bg-[#FF8533]",
      secondary: "text-white border border-white/20 hover:bg-[#FB8A00]",
    };

    return (
      <Link
        ref={ref}
        to={to}
        className={`${baseStyle} ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }
);

export default Button;
