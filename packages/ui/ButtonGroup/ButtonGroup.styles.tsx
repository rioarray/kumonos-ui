import tw, { css } from "twin.macro";
import { IDefaultProps } from "./ButtonGroup.types";

export const ButtonGroupStyle = ({ size, rounded }: IDefaultProps) => [
  // common button styles
  tw`inline-flex shadow-sm`,

  css`
    & > button {
      ${tw`-ml-[2px] rounded-none first-of-type:ml-0 ring-0!`}

      // rounded button group styles
      ${rounded
        ? tw`first-of-type:rounded-l-full last-of-type:rounded-r-full`
        : tw`first-of-type:rounded-l-md last-of-type:rounded-r-md`}

      // size button group styles
      ${size === "small" && [
        css`
          &.btn-solid {
            ${tw`!py-2`}
          }
          &.btn-outline {
            ${tw`!py-[7px]`}
          }
        `,
      ]}
      ${size === "default" && [
        css`
          &.btn-solid {
            ${tw`!py-3`}
          }
          &.btn-outline {
            ${tw`!py-[11px]`}
          }
        `,
      ]}
      ${size === "large" && [
        css`
          &.btn-solid {
            ${tw`!py-3 sm:!p-5`}
          }
          &.btn-outline {
            ${tw`!py-[11px] sm:!p-[19px]`}
          }
        `,
      ]}
    }
  `,
];
