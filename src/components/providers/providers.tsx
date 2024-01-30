import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import ReactQueryProvider from "./reactQueryProvider";

interface IProvidersProps {}

const Providers: FC<PropsWithChildren<IProvidersProps>> = ({ children }) => {
    const router = useRouter();

    return (
        <ReactQueryProvider>
            <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
        </ReactQueryProvider>
    );
};

export default Providers;
