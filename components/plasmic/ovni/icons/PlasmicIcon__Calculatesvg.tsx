// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalculatesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalculatesvgIcon(props: CalculatesvgIconProps) {
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
          "M314 828h50v-88h88v-50h-88v-88h-50v88h-88v50h88v88zm215-35h201v-49H529v49zm0-107h201v-50H529v50zm37-163l61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61 36 36zm-325-72h196v-50H241v50zm-61 485q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180zm0-60h600V276H180v600zm0-600v600-600z"
        }
      ></path>
    </svg>
  );
}

export default CalculatesvgIcon;
/* prettier-ignore-end */
