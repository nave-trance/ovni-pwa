// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FinanceChipsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FinanceChipsvgIcon(props: FinanceChipsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 96 960 960"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M470 736h29v-32q28-4 47.5-23t19.5-49q0-26-20-43.5T500 560v-74q10 3 16.5 10t9.5 17l36-15q-7-21-24-33.5T500 448v-32h-30v31q-28 3-47.5 20.5T403 514q0 27 20.5 45t46.5 29v79q-16-5-27-17t-15-28l-35 15q8 28 28 46t49 22v31zm30-70v-66q11 5 19.5 12t8.5 21q0 16-8 22.5T500 666zm-30-119q-11-5-20-12t-9-21q0-14 9-20.5t20-8.5v62zM320 856q-117 0-198.5-81.5T40 576q0-117 81.5-198.5T320 296h320q117 0 198.5 81.5T920 576q0 117-81.5 198.5T640 856H320zm0-60h320q91.3 0 155.65-64.288Q860 667.424 860 576.212T795.65 420.5Q731.3 356 640 356H320q-91.3 0-155.65 64.288Q100 484.576 100 575.788T164.35 731.5Q228.7 796 320 796zm160-220z"
        }
      ></path>
    </svg>
  );
}

export default FinanceChipsvgIcon;
/* prettier-ignore-end */
