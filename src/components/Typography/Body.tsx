import classNames from "classnames";

export function P({ 
  children,
  weight = "normal",
  size = "base",
  color = "base",
  noMargin = false,
}: { 
  children: React.ReactNode,
  weight?: "normal" | "bold" | "light",
  size?: "base" | "small" | "large",
  color?: "base" | "secondary" | "dark",
  noMargin?: boolean,
}) {
  const className = classNames("text-base print:text-sm", {
    "font-bold": weight === "bold",
    "text-sm": size === "small",
    "text-lg": size === "large",
    "text-text-light": weight === "light",
    "text-text-main": color === "base",
    "text-secondary": color === "secondary",
    "text-text-dark": color === "dark",
    "mb-2": !noMargin,
  });

  return (
    <p className={className}>
      {children}
    </p>
  )
}

