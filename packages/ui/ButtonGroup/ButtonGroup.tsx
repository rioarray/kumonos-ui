import { IButtonGroupProps } from "./ButtonGroup.types";
import { ButtonGroupStyle } from "./ButtonGroup.styles";

const ButtonGroup = <C extends React.ElementType>({
  as,
  children,
  rounded = false,
  size = "default",
}: IButtonGroupProps<C>) => {
  const Component = as ?? "div";

  return (
    <Component css={ButtonGroupStyle({ rounded, size })}>{children}</Component>
  );
};

export { ButtonGroup };
