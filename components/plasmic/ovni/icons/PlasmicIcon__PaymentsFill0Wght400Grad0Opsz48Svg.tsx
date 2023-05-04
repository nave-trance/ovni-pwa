// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaymentsFill0Wght400Grad0Opsz48SvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PaymentsFill0Wght400Grad0Opsz48SvgIcon(
  props: PaymentsFill0Wght400Grad0Opsz48SvgIconProps
) {
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
          "M540 636q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35zM220 776q-24.75 0-42.375-17.625T160 716V316q0-24.75 17.625-42.375T220 256h640q24.75 0 42.375 17.625T920 316v400q0 24.75-17.625 42.375T860 776H220zm100-60h440q0-42 29-71t71-29V416q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71zm480 180H100q-24.75 0-42.375-17.625T40 836V376h60v460h700v60zM220 716V316v400z"
        }
      ></path>
    </svg>
  );
}

export default PaymentsFill0Wght400Grad0Opsz48SvgIcon;
/* prettier-ignore-end */
