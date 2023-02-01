import { useTheme } from "styled-components";

function CartIcon() {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={colors.iconPrimaryColor}
        d="M22.952 12l-5.837-8.747a1.324 1.324 0 00-1.106-.56c-.426 0-.853.187-1.106.574L9.066 12H2.683c-.733 0-1.332.6-1.332 1.333 0 .12.013.24.053.36l3.385 12.36A2.65 2.65 0 007.347 28h17.324a2.678 2.678 0 002.572-1.947l3.385-12.36.04-.36c0-.733-.6-1.333-1.333-1.333h-6.383zm-10.94 0l3.997-5.867L20.007 12H12.01zm3.997 10.667A2.674 2.674 0 0113.344 20c0-1.467 1.2-2.667 2.665-2.667 1.466 0 2.665 1.2 2.665 2.667 0 1.467-1.2 2.667-2.665 2.667z"
      ></path>
    </svg>
  );
}

export default CartIcon;
