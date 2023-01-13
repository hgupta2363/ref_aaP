import React from "react";
import { APP_COLORS } from "../../constants/colors";

export default function LocationSvg(props) {
  const {
    width = "11",
    height = "16",
    color = APP_COLORS.ACCENTCOLOR,
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.38766 5.19004C8.38766 3.4253 6.95074 1.98838 5.186 1.98838C3.42319 1.98838 1.99023 3.4253 1.99023 5.19004C1.99023 6.95285 3.42319 8.38581 5.186 8.38581C6.95074 8.38581 8.38766 6.95285 8.38766 5.19004ZM2.65569 5.19004C2.65569 3.79434 3.79027 2.65384 5.186 2.65384C6.58759 2.65384 7.7222 3.79238 7.7222 5.19004C7.7222 6.58573 6.58762 7.72035 5.186 7.72035C3.78824 7.72035 2.65569 6.58577 2.65569 5.19004V5.19004Z"
        fill={color}
      />
      <path
        d="M5.18408 15.704C5.29787 15.704 10.3741 7.93439 10.3741 5.19004C10.3743 2.32605 8.05003 0 5.18408 0C2.32598 0 0 2.32612 0 5.19004C0.00191698 7.93435 5.07226 15.704 5.18408 15.704ZM5.18408 0.665318C7.67906 0.665318 9.7088 2.69499 9.7088 5.19004C9.7088 7.17467 6.49141 12.5867 5.18618 14.5634C3.88086 12.5867 0.669174 7.17442 0.669174 5.19004C0.667257 2.69506 2.6931 0.665318 5.18408 0.665318V0.665318Z"
        fill={color}
      />
    </svg>
  );
}
