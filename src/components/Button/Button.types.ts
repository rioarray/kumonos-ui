type IColorType = {
  /**
   * Color of type
   */
  colorType?: "solid" | "outline";
};

export type IVariant = {
  /**
   * Variant of button
   */
  variant?:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "secondary"
    | "dark"
    | "light";
};

export type IButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "disabled"
> &
  IColorType &
  IVariant & {
    /**
     * Block into full width for button
     */
    block?: boolean;
    disabled?: boolean;
    /**
     * Size of button
     */
    size?: "small" | "default" | "large";
  };

export const DEFAULT_VARIANT = "primary";
