import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/logo.png";
import Link from "./Link";

type Props = {
    selectedPage: string;
    setSelectPage: (value: string) => void;
};

const Navbar: React.FC<Props> = ({ selectedPage, setSelectPage }: Props) => {

    const flexBeetween = "flex items-center justify-between";

    return (
        <nav>
            <div className={`${flexBeetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBeetween} mx-auto w-5/6`}>
                    <div className={`${flexBeetween} w-full gap-16`}>
                        {/* Left Side */}
                        <img src={Logo} alt="Logo"/>
                        {/* Rigth Side */}
                        <div className={`${flexBeetween} w-full`}>
                            <div className={`${flexBeetween} gap-8 text-sm`}>
                                
                                <Link 
                                    page = "Home"
                                    selectedPage={selectedPage}
                                    setSelectPage={setSelectPage}
                                />
                                <Link 
                                    page = "Benefits"
                                    selectedPage={selectedPage}
                                    setSelectPage={setSelectPage}
                                />
                                <Link 
                                    page = "Our Merch"
                                    selectedPage={selectedPage}
                                    setSelectPage={setSelectPage}
                                />
                                <Link 
                                    page = "About Us"
                                    selectedPage={selectedPage}
                                    setSelectPage={setSelectPage}
                                />

                            </div>
                            <div className={`${flexBeetween} gap-8`}>
                                <p>Sign In</p>
                                <button>Become a Member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;