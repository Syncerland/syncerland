import Providers from "@src/components/providers/providers";
import "@src/styles/globals.scss";
import type { AppProps } from "next/app";
import { FC } from "react";
import { NextPageWithLayout } from "./page";

import { Raleway } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
});

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout;
}

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <Providers>
            <main className={`${raleway.className}`}>
                {getLayout(<Component {...pageProps} />)}
            </main>
        </Providers>
    );
};

export default App;
