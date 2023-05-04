// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ModeOfTravelsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ModeOfTravelsvgIcon(props: ModeOfTravelsvgIconProps) {
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
          "M480 976Q325 842 242.5 726T160 504q0-149 97-238.5T480 176q134 0 228 94t94 258l94-94 42 42-166 166-166-166 42-42 94 94q0-132-73-212t-189-80q-109 0-184.5 75.5T220 504q0 82 66 179t194 214q20-18 43-41l40-40q-6-12-9.5-24t-3.5-23q0-38 26.5-64t63.5-26q38 0 64 26t26 64q0 38-26 64t-64 26q-7 0-14.5-1t-16.5-4q-31 32-61 61t-68 61z"
        }
      ></path>
    </svg>
  );
}

export default ModeOfTravelsvgIcon;
/* prettier-ignore-end */
