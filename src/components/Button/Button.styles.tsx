import tw, { styled } from "twin.macro";
import { DEFAULT_VARIANT, IVariant, IButtonProps } from "./Button.types";

const COMMON_RING_STYLES = `enabled:focus:ring enabled:focus:ring-offset-0`;

const generateOutlineStyles = ({ variant = DEFAULT_VARIANT }: IVariant) => {
  switch (variant) {
    case "primary":
      return tw`
        ${COMMON_RING_STYLES}
        border-2
        border-blue-500
        text-blue-500
        enabled:focus:ring-blue-500/[.25]
        enabled:focus:text-blue-500
        enabled:focus:bg-transparent
        enabled:hover:bg-blue-500
        enabled:hover:text-white`;
    case "success":
      return tw`
        ${COMMON_RING_STYLES}
        border-2
        border-teal-500
        text-teal-500
        enabled:focus:ring-teal-500/[.25]
        enabled:focus:text-teal-500
        enabled:focus:bg-transparent
        enabled:hover:bg-teal-500
        enabled:hover:text-white`;
    case "warning":
      return tw`
        ${COMMON_RING_STYLES}
        border-2
        border-yellow-500
        text-yellow-500
        enabled:focus:ring-yellow-500/[.25]
        enabled:focus:text-yellow-500
        enabled:focus:bg-transparent
        enabled:hover:bg-yellow-500
        enabled:hover:text-white`;
    case "danger":
      return tw`
        ${COMMON_RING_STYLES}
        border-2
        border-red-500
        text-red-500
        enabled:focus:ring-red-500/[.25]
        enabled:focus:text-red-500
        enabled:focus:bg-transparent
        enabled:hover:bg-red-500
        enabled:hover:text-white`;
    case "secondary":
      return tw`
        ${COMMON_RING_STYLES}
        border-2
        border-gray-500
        text-gray-500
        enabled:focus:ring-gray-500/[.25]
        enabled:focus:text-gray-500
        enabled:focus:bg-transparent
        enabled:hover:bg-gray-500
        enabled:hover:text-white`;
    case "dark":
      return tw`
        ${COMMON_RING_STYLES}
        border-2
        border-gray-800
        text-gray-800
        enabled:focus:ring-gray-800/[.25]
        enabled:focus:text-gray-800
        enabled:focus:bg-transparent
        enabled:hover:bg-gray-800
        enabled:hover:text-white`;
    default:
      return tw`bg-transparent text-gray-600`;
  }
};

const generateSolidStyles = ({ variant = DEFAULT_VARIANT }: IVariant) => {
  switch (variant) {
    case "primary":
      return tw`
        ${COMMON_RING_STYLES}
        border
        text-white
        bg-blue-500
        enabled:focus:ring-blue-500/[.25]
        enabled:hover:bg-blue-600`;
    case "success":
      return tw`
        ${COMMON_RING_STYLES}
        border
        text-white
        bg-teal-500
        enabled:focus:ring-teal-500/[.25]
        enabled:hover:bg-teal-600`;
    case "warning":
      return tw`
        ${COMMON_RING_STYLES}
        border
        text-white
        bg-yellow-500
        enabled:focus:ring-yellow-500/[.25]
        enabled:hover:bg-yellow-600`;
    case "danger":
      return tw`
        ${COMMON_RING_STYLES}
        border
        text-white
        bg-red-500
        enabled:focus:ring-red-500/[.25]
        enabled:hover:bg-red-600`;
    case "secondary":
      return tw`
        ${COMMON_RING_STYLES}
        border
        text-white
        bg-gray-500
        enabled:focus:ring-gray-500/[.25]
        enabled:hover:bg-gray-600`;
    case "dark":
      return tw`
        ${COMMON_RING_STYLES}
        border
        text-white
        bg-gray-800
        enabled:focus:ring-gray-800/[.25]
        enabled:hover:bg-gray-900`;
    default:
      return tw`bg-transparent text-gray-600`;
  }
};

const variantStyles = ({ colorType, variant }: IButtonProps) => {
  if (colorType === "solid") {
    return generateSolidStyles({ variant });
  }
  return generateOutlineStyles({ variant });
};

export const Button = styled.button(
  ({ block, colorType, disabled, size, variant }: IButtonProps) => [
    // common button styles
    tw`border-transparent rounded-md font-semibold text-sm gap-2 inline-flex items-center justify-center`,

    // transition styles
    variant !== "light" && tw`transition-all`,

    // size styles
    size === "small" && tw`py-2 px-3`,
    size === "default" && tw`py-3 px-4`,
    size === "large" && tw`py-3 px-4 sm:p-5`,

    // variant styles
    variantStyles({ colorType, variant }),

    // disabled styles
    disabled && tw`cursor-not-allowed disabled:opacity-60`,

    // block into full width styles
    block && tw`w-full`,
  ]
);
