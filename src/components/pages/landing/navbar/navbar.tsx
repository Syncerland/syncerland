import { Button } from "@nextui-org/react";
import { CloseIcon } from "@src/components/icons/close";
import { MenuIcon } from "@src/components/icons/menu";
import MobileMenu from "@src/components/ui/mobileMenu/mobileMenu";
import useToggle from "@src/hooks/useToggle/useToggle";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
    const [isMenuOpen, toggleMenu] = useToggle();

    return (
        <nav className="w-full">
            <section className="px-4 flex justify-between items-center lg:px-20">
                <div className="flex items-center gap-20">
                    <h2 className="text-2xl font-semibold md:text-3xl text-primary-500">
                        <Link href="/">Syncerland</Link>
                    </h2>

                    <div className="hidden md:flex gap-6 items-center mt-1">
                        <Link
                            className="text-slate-900 visited:text-slate-900"
                            href="/"
                        >
                            About Us
                        </Link>
                        <Link
                            className="text-slate-900 visited:text-slate-900"
                            href="/"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:flex gap-2">
                    <Button color="primary" radius="lg" variant="bordered">
                        Register
                    </Button>

                    <Button color="primary" radius="lg" variant="solid">
                        Login
                    </Button>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden">
                    <Button
                        isIconOnly
                        className="bg-transparent"
                        radius="full"
                        onClick={() => toggleMenu()}
                    >
                        <MenuIcon className="text-2xl" />
                    </Button>

                    <MobileMenu
                        isOpen={isMenuOpen}
                        toggle={() => toggleMenu(false)}
                    >
                        <Button
                            onClick={() => toggleMenu(false)}
                            isIconOnly
                            radius="full"
                            className="bg-transparent self-end"
                        >
                            <CloseIcon className="text-xl" />
                        </Button>
                        <div className="flex flex-col gap-2 h-full justify-between w-full">
                            <div className="flex flex-col gap-2">
                                <Link
                                    className="text-slate-900 visited:text-slate-900"
                                    href="/"
                                >
                                    About Us
                                </Link>
                                <Link
                                    className="text-slate-900 visited:text-slate-900"
                                    href="/"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            <div className="flex flex-col gap-2 w-full my-5">
                                <Button
                                    color="primary"
                                    radius="lg"
                                    variant="bordered"
                                    fullWidth
                                >
                                    Register
                                </Button>

                                <Button
                                    color="primary"
                                    radius="lg"
                                    variant="solid"
                                    fullWidth
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                    </MobileMenu>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
