import React from "react";

export type IDefaultProps = {
  /**
   * Size of button group
   */
  size?: "small" | "default" | "large";
  rounded?: boolean;
};

export type IButtonGroupProps<C extends React.ElementType> =
  React.ComponentPropsWithoutRef<C> &
    IDefaultProps & {
      as?: C;
      children?: React.ReactNode;
    };
