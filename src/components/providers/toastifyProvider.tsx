import { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastifyProviderProps {}

const ToastifyProvider: FC<PropsWithChildren<ToastifyProviderProps>> = ({
    children,
}) => {
    return (
        <>
            {children}
            <ToastContainer
                autoClose={5000}
                position="top-center"
                closeButton
                closeOnClick
                theme="colored"
                className="p-2 sm:p-0"
            />
        </>
    );
};

export default ToastifyProvider;
