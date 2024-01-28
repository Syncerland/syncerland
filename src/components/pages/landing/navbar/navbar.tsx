import { Button } from "@nextui-org/react";
import { MenuIcon } from "@src/components/icons/menu";
import MobileMenu from "@src/components/ui/mobileMenu/mobileMenu";
import Link from "next/link";
import { FC, useState } from "react";

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="w-full">
            <section className="px-4 flex justify-between items-center lg:px-20">
                <h2 className="text-xl font-semibold">
                    <Link href="/">Syncerland</Link>
                </h2>

                {/* Mobile Navbar */}
                <div className="md:hidden">
                    <Button
                        isIconOnly
                        className="bg-transparent"
                        radius="full"
                        onClick={toggleMenu}
                    >
                        <MenuIcon className="text-2xl" />
                    </Button>

                    <MobileMenu isOpen={isMenuOpen} toggle={toggleMenu}>
                        <div className="flex flex-col gap-2 h-full justify-between w-full">
                            <div className="flex flex-col gap-2">
                                <Link href="/">About Us</Link>
                                <Link href="/">Contact Us</Link>
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

                {/* Desktop Navbar */}
                <div className="hidden md:flex gap-2">
                    <Button color="primary" radius="lg" variant="bordered">
                        Register
                    </Button>

                    <Button color="primary" radius="lg" variant="solid">
                        Login
                    </Button>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
