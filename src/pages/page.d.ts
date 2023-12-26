/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-unused-vars */

import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};
