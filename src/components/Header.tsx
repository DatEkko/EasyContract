"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `transition ${pathname === path ? "text-yellow-300" : "hover:text-yellow-200"
        }`;

    return (
        <div className="fixed w-full h-20 bg-[#20253d] flex items-center justify-between px-10 text-white font-semibold z-30">
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
            <div className="flex gap-12 text-lg">
                <Link href="/" className={linkClass("/")}>
                    Trang Chủ
                </Link>
                <Link href="/tao-hop-dong" className={linkClass("/tao-hop-dong")}>
                    Tạo Mẫu Riêng
                </Link>
                <Link href="/hop-dong-mien-phi" className={linkClass("/hop-dong-mien-phi")}>
                    Kho Hợp Đồng
                </Link>
                <Link href="/don-phep-mien-phi" className={linkClass("/don-phep-mien-phi")}>
                    Kho Đơn Phép
                </Link>
                <Link href="/lien-he" className={linkClass("/lien-he")}>
                    Liên Hệ
                </Link>
            </div>
        </div>
    );
};

export default Header;
