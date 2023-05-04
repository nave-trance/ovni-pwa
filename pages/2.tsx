// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/ovni/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/ovni/PlasmicGlobalVariant__Screen";
import { ScheduleContext } from "../components/plasmic/ovni/PlasmicGlobalVariant__Schedule";
import { PlasmicExcursao2 } from "../components/plasmic/ovni/PlasmicExcursao2";
import { useRouter } from "next/router";

function Excursao2() {
  // Use PlasmicExcursao2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicExcursao2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicExcursao2 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ScheduleContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <ph.PageParamsProvider
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicExcursao2 />
        </ph.PageParamsProvider>
      </GlobalContextsProvider>
    </ScheduleContext.Provider>
  );
}

export default Excursao2;
