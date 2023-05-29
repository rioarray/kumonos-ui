import React, { forwardRef } from "react";
import { Button as ButtonStyle } from "./Button.styles";
import { IButtonProps, DEFAULT_VARIANT } from "./Button.types";

export const Button = forwardRef(
  (
    {
      children,
      block = false,
      colorType = "solid",
      disabled = false,
      rounded = false,
      size = "default",
      variant = DEFAULT_VARIANT,
      ...props
    }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <ButtonStyle
        ref={ref}
        block={block}
        colorType={colorType}
        disabled={disabled}
        rounded={rounded}
        size={size}
        variant={variant}
        {...props}
      >
        {children}
      </ButtonStyle>
    );
  }
);

Button.displayName = "Button";
