import Providers from "@src/components/providers/providers";
import "@src/styles/globals.css";
import type { AppProps } from "next/app";
import { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Providers>
            <Component {...pageProps} />
        </Providers>
    );
};

export default App;
