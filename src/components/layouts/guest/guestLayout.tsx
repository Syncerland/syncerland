import Navbar from "@src/components/layouts/guest/navbar/navbar";
import { FC, PropsWithChildren } from "react";

interface GuestLayoutProps {}

const GuestLayout: FC<PropsWithChildren<GuestLayoutProps>> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default GuestLayout;
