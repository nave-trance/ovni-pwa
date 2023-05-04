// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocalActivitysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocalActivitysvgIcon(props: LocalActivitysvgIconProps) {
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
          "M376 738l104-81 104 81-40-128 98-82H522l-42-122-42 122H318l98 82-40 128zM140 896q-26 0-43-17t-17-43V683q37-8 61.5-37.5T166 576q0-40-24.5-70T80 469V316q0-26 17-43t43-17h680q26 0 43 17t17 43v153q-37 7-61.5 37T794 576q0 40 24.5 69.5T880 683v153q0 26-17 43t-43 17H140zm0-60h680V727q-38-26-62-65t-24-86q0-47 24-86t62-65V316H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140 727v109zm340-260z"
        }
      ></path>
    </svg>
  );
}

export default LocalActivitysvgIcon;
/* prettier-ignore-end */
