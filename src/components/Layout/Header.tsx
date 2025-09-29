"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Sidebar from "./SideBar";

const Header = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const linkClass = (path: string) =>
        `transition ${pathname === path ? "text-yellow-300" : "hover:text-yellow-200"
        }`;

    return (
        <>
            <div className="fixed w-full h-20 bg-econtract flex items-center justify-between px-10 text-white font-semibold z-30">
                {/* Logo */}
                <div className="relative">
                    <Link href="/">
                        <Image src="/logo/logo.png"
                            alt="logo"
                            width={120}
                            height={60}
                            className="object-contain"
                            priority />
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden lg:flex lg:items-center gap-12 text-lg">
                    <Link href="/" className={linkClass("/")}>
                        Trang Chủ
                    </Link>
                    <Link href="/hop-dong-mien-phi" className={linkClass("/hop-dong-mien-phi")}>
                        Kho Hợp Đồng
                    </Link>
                    <Link href="/nang-cap-dich-vu" className={linkClass("/nang-cap-dich-vu")}>
                        Nâng Cấp / Dịch vụ
                    </Link>
                    <Link href="/lien-he" className={linkClass("/lien-he")}>
                        Liên Hệ
                    </Link>
                    <Link href="/dang-nhap" className={`${linkClass("/dang-nhap")} border-2 py-2 px-4 rounded-3xl`}>
                        Đăng Nhập
                    </Link>
                </div>

                <div
                    className="lg:hidden cursor-pointer text-2xl hover:text-yellow-200"
                    onClick={() => setOpen(true)}
                >
                    <RiMenu3Fill />
                </div>
            </div>
            <Sidebar open={open} onClose={() => setOpen(false)} />
        </>

    );
};

export default Header;
