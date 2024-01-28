import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC = () => {
    const description =
        "Syncerland is a web application to help you manage and track all your applications for different job positions";

    return (
        <Html lang="en">
            <Head>
                <meta name="description" content={description} />
            </Head>
            <body className="light">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
