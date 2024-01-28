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
            <div className={styles.main}>{children}</div>
        </>
    );
};

export default PrimaryLayout;
