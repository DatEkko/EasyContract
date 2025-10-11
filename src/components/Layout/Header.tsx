"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { signOut } from "next-auth/react";
import Sidebar from "./SideBar";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session | null }) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const linkClass = (path: string) =>
        `transition ${pathname === path ? "text-yellow-300" : "hover:text-yellow-200"
        }`;

    return (
        <>
            <div className="fixed w-full h-20 bg-econtract flex items-center justify-between px-10 text-white font-semibold z-30">
                {/* Logo */}
                <div className="relative">
                    <Link href="/">
                        <Image
                            src="/logo/logo.png"
                            alt="logo"
                            width={120}
                            height={60}
                            className="object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden lg:flex lg:items-center gap-12 text-base relative">
                    <Link href="/" className={linkClass("/")}>
                        Trang Chủ
                    </Link>
                    <Link
                        href="/hop-dong"
                        className={linkClass("/hop-dong")}
                    >
                        Kho Hợp Đồng
                    </Link>
                    <Link
                        href="/nang-cap-dich-vu"
                        className={linkClass("/nang-cap-dich-vu")}
                    >
                        Nâng Cấp / Dịch vụ
                    </Link>
                    <Link href="/lien-he" className={linkClass("/lien-he")}>
                        Liên Hệ
                    </Link>

                    {/* Nếu chưa login */}
                    {!session ? (
                        <Link href={"/dang-nhap"}
                            className={`${linkClass("/dang-nhap")} border-2 py-2 px-4 rounded-3xl cursor-pointer`}
                        >
                            Đăng Nhập
                        </Link>
                    ) : (
                        <div
                            onMouseEnter={() => setDropdown(true)}
                            onMouseLeave={() => setDropdown(false)}
                            className="relative"
                        >
                            <button
                                className="border-2 py-2 px-4 rounded-3xl cursor-pointer"
                            >
                                Xin chào, {session.user?.name || session.user?.email}
                            </button>
                            {dropdown && (
                                <div className="absolute right-0 top-full w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden cursor-pointer">
                                    <Link
                                        href={"/lich-su"}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base text-econtract cursor-pointer"
                                    >
                                        Lịch sử
                                    </Link>
                                    <button
                                        onClick={() => signOut()}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-base text-red-500 cursor-pointer"
                                    >
                                        Đăng xuất
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile menu icon */}
                <div
                    className="lg:hidden cursor-pointer text-2xl hover:text-yellow-200"
                    onClick={() => setOpen(true)}
                >
                    <RiMenu3Fill />
                </div>
            </div >
            <Sidebar open={open} onClose={() => setOpen(false)} />
        </>
    );
};

export default Header;
