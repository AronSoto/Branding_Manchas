import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar: React.FC<Props> = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {

    const flexBeetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-xl";

    return (
        <nav>
            <div className={`${navbarBackground}${flexBeetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBeetween} mx-auto w-5/6`}>
                    <div className={`${flexBeetween} w-full gap-16`}>

                        {/* Rigth Side */}
                        <img src={Logo} alt="Logo" width={113} height={24} />

                        {/* Left Side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBeetween} w-full`}>
                                <div className={`${flexBeetween} gap-8`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Our Merch"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="About Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBeetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="text-white h-6 w-6" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MENU MODAL */}

            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 botoom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="text-gray-400 h-6 w-6" />
                        </button>
                    </div>

                    {/* CLOSE ICON */}
                        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Benefits"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Our Merch"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About Us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;