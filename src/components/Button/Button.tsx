import { Link } from "react-router-dom";
import { forwardRef } from "react";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: "_blank" | "_self";
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ to, children, target,variant = "primary", className = "" }, ref) => {
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
        target={target} 
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${baseStyle} ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }
);

export default Button;
