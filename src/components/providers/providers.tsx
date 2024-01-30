import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import ReactQueryProvider from "./reactQueryProvider";
import ToastifyProvider from "./toastifyProvider";

interface IProvidersProps {}

const Providers: FC<PropsWithChildren<IProvidersProps>> = ({ children }) => {
    const router = useRouter();

    return (
        <ReactQueryProvider>
            <ToastifyProvider>
                <NextUIProvider navigate={router.push}>
                    {children}
                </NextUIProvider>
            </ToastifyProvider>
        </ReactQueryProvider>
    );
};

export default Providers;
