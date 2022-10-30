import { ComponentPropsWithoutRef, ElementType } from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type IText<T extends ElementType> = {
  as?: T;
  color?: Rainbow | "black";
};

type TextProps<T extends ElementType> = IText<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IText<T>>;

export const Text = <C extends ElementType = "span">({
  as,
  children,
  color,
  style,
  ...props
}: TextProps<C>) => {
  const Component = as || "span";
  const internalStyles = color ? { style: { ...style, color } } : {};

  return (
    <Component {...props} {...internalStyles}>
      {children}
    </Component>
  );
};
