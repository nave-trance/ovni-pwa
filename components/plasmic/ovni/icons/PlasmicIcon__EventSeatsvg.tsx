// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EventSeatsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EventSeatsvgIcon(props: EventSeatsvgIconProps) {
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
          "M160 936V716h640v220h-60V776H220v160h-60zm9.882-290Q149 646 134.5 631.382q-14.5-14.617-14.5-35.5Q120 575 134.618 560.5q14.617-14.5 35.5-14.5Q191 546 205.5 560.618q14.5 14.617 14.5 35.5Q220 617 205.382 631.5q-14.617 14.5-35.5 14.5zM280 656V276q0-24.75 17.625-42.375T340 216h280q24.75 0 42.375 17.625T680 276v380H280zm509.882-10Q769 646 754.5 631.382q-14.5-14.617-14.5-35.5Q740 575 754.618 560.5q14.617-14.5 35.5-14.5Q811 546 825.5 560.618q14.5 14.617 14.5 35.5Q840 617 825.382 631.5q-14.617 14.5-35.5 14.5z"
        }
      ></path>
    </svg>
  );
}

export default EventSeatsvgIcon;
/* prettier-ignore-end */
