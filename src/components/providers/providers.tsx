import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

interface IProvidersProps {}

const Providers: FC<PropsWithChildren<IProvidersProps>> = ({ children }) => {
    const router = useRouter();

    return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export default Providers;
