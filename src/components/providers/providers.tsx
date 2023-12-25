import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

interface IProvidersProps {}

const Providers: FC<PropsWithChildren<IProvidersProps>> = ({ children }) => {
    return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
