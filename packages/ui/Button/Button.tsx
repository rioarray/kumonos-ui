"use client";

import React, { forwardRef } from "react";
import clsx from "clsx";
import { Button as ButtonStyle } from "./Button.styles";
import { IButtonProps, DEFAULT_VARIANT } from "./Button.types";

export const Button = forwardRef(
  (
    {
      children,
      block = false,
      className = "",
      colorType = "solid",
      disabled = false,
      rounded = false,
      size = "default",
      variant = DEFAULT_VARIANT,
      ...props
    }: IButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const cx = clsx({
      "btn-solid": colorType === "solid",
      "btn-outline": colorType === "outline",
      [className]: className,
    });

    return (
      <ButtonStyle
        ref={ref}
        className={cx}
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
