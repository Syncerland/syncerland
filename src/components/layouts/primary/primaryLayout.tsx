import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import styles from "./primaryLayout.module.scss";

export interface IPrimaryLayoutProps {
    pageTitle: string;
}

const PrimaryLayout: FC<PropsWithChildren<IPrimaryLayoutProps>> = ({
    pageTitle,
    children,
}) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default PrimaryLayout;
