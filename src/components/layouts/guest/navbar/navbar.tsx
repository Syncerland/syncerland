import { Button } from "@nextui-org/react";
import MobileMenu from "@src/components/ui/mobileMenu/mobileMenu";
import useToggle from "@src/hooks/useToggle/useToggle";
import { getUser } from "@src/lib/utils/user";
import {
    IconHome,
    IconInfoSquareRounded,
    IconMenu2,
    IconPhone,
    IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const Navbar: FC = () => {
    const router = useRouter();
    const [isMenuOpen, toggleMenu] = useToggle();
    const [isMounted, setIsMounted] = useToggle();

    const user = getUser();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <nav className="w-full py-4 shadow-sm">
            <section className="px-4 flex justify-between items-center lg:px-20">
                <div className="flex items-center gap-20">
                    <h2 className="text-2xl font-semibold md:text-3xl text-primary-500">
                        <Link href="/">Syncerland</Link>
                    </h2>

                    <div className="hidden md:flex gap-6 items-center mt-1">
                        <Link
                            className="text-slate-900 visited:text-slate-900"
                            href="/about-us"
                        >
                            About Us
                        </Link>
                        <Link
                            className="text-slate-900 visited:text-slate-900"
                            href="/contact-us"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Desktop Navbar */}
                {isMounted && (
                    <div className="hidden md:flex gap-2">
                        {!user ? (
                            <>
                                <Button
                                    color="primary"
                                    radius="lg"
                                    variant="bordered"
                                    onClick={() => {
                                        router.push("/auth/register");
                                    }}
                                >
                                    Register
                                </Button>

                                <Button
                                    color="primary"
                                    radius="lg"
                                    variant="solid"
                                    onClick={() => {
                                        router.push("/auth/login");
                                    }}
                                >
                                    Login
                                </Button>
                            </>
                        ) : (
                            <Button
                                color="primary"
                                radius="lg"
                                onClick={() => {
                                    router.push("/app");
                                }}
                            >
                                Dashboard
                            </Button>
                        )}
                    </div>
                )}

                {/* Mobile Navbar */}
                <div className="md:hidden">
                    <Button
                        isIconOnly
                        className="bg-transparent"
                        radius="full"
                        onClick={() => toggleMenu()}
                        aria-label="mobile menu toggle"
                    >
                        <IconMenu2 />
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
                            aria-label="menu toggle button"
                        >
                            <IconX />
                        </Button>
                        <div className="flex flex-col gap-2 h-full justify-between w-full">
                            <div className="flex flex-col gap-2">
                                <Link
                                    onClick={() => toggleMenu(false)}
                                    className="text-slate-900 visited:text-slate-900 font-medium"
                                    href="/"
                                >
                                    <div className="flex items-center gap-3">
                                        <IconHome
                                            className="text-primary-500"
                                            size={25}
                                        />
                                        <p className="mt-1">Home</p>
                                    </div>
                                </Link>

                                <Link
                                    onClick={() => toggleMenu(false)}
                                    className="text-slate-900 visited:text-slate-900 font-medium mt-1"
                                    href="/about-us"
                                >
                                    <div className="flex items-center gap-3">
                                        <IconInfoSquareRounded
                                            className="text-primary-500"
                                            size={25}
                                        />
                                        <p className="mt-1">About Us</p>
                                    </div>
                                </Link>
                                <Link
                                    onClick={() => toggleMenu(false)}
                                    className="text-slate-900 visited:text-slate-900 font-medium mt-1"
                                    href="/contact-us"
                                >
                                    <div className="flex items-center gap-3">
                                        <IconPhone
                                            className="text-primary-500"
                                            size={25}
                                        />
                                        <p className="mt-1">Contact Us</p>
                                    </div>
                                </Link>
                            </div>

                            {isMounted && (
                                <div className="flex flex-col gap-2 w-full my-16">
                                    {!user ? (
                                        <>
                                            <Button
                                                color="primary"
                                                radius="lg"
                                                variant="bordered"
                                                fullWidth
                                                onClick={() => {
                                                    router.push(
                                                        "/auth/register"
                                                    );
                                                    toggleMenu(false);
                                                }}
                                            >
                                                Register
                                            </Button>

                                            <Button
                                                color="primary"
                                                radius="lg"
                                                variant="solid"
                                                fullWidth
                                                onClick={() => {
                                                    router.push("/auth/login");
                                                    toggleMenu(false);
                                                }}
                                            >
                                                Login
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            color="primary"
                                            radius="lg"
                                            variant="solid"
                                            fullWidth
                                            onClick={() => {
                                                router.push("/app");
                                                toggleMenu(false);
                                            }}
                                        >
                                            Dashboard
                                        </Button>
                                    )}
                                </div>
                            )}
                        </div>
                    </MobileMenu>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
