import { Button, cn } from "@nextui-org/react";
import { CloseIcon } from "@src/components/icons/close";
import { FC, PropsWithChildren } from "react";
import styles from "./mobileMenu.module.scss";

interface MobileMenuProps {
    isOpen: boolean;
    toggle: () => void;
    className?: string;
}

const MobileMenu: FC<PropsWithChildren<MobileMenuProps>> = ({
    children,
    isOpen,
    toggle,
    className,
}) => {
    return (
        <>
            <div
                className={`${cn(
                    "flex max-h-screen h-screen w-80 bg-white shadow-2xl z-10 md:hidden",
                    className
                )} ${styles["mobile-menu"]} ${
                    isOpen ? styles["mobile-menu__open"] : ""
                }`}
            >
                <div className="flex flex-col w-full items-center p-4 ">
                    <Button
                        onClick={toggle}
                        isIconOnly
                        radius="full"
                        className="bg-transparent self-end"
                    >
                        <CloseIcon className="text-xl" />
                    </Button>
                    {children}
                </div>
            </div>

            {isOpen && (
                <div
                    role="presentation"
                    className="fixed top-0 left-0 z-0 w-screen h-screen"
                    onClick={toggle}
                />
            )}
        </>
    );
};

export default MobileMenu;