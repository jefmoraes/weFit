import { useTheme } from "styled-components";

type TrashIconsProps = {
  display: "mobile" | "desktop";
};

function TrashIcon({ display }: TrashIconsProps) {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={display === "desktop" ? 18 : 16}
      height="18"
      fill="none"
      viewBox="0 0 19 18"
    >
      <path
        fill={colors.iconSecondaryColor}
        d="M1.997 16c0 1.1 1.177 2 2.616 2h10.463c1.44 0 2.616-.9 2.616-2V4H1.997v12zM19 1h-4.578l-1.308-1H6.575L5.267 1H.69v2H19V1z"
      ></path>
    </svg>
  );
}

export default TrashIcon;
