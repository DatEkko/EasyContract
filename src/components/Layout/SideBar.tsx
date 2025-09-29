"use client";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `transition ${pathname === path ? "text-yellow-300" : "hover:text-yellow-200"
        }`;

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-econtract z-30 text-white p-6 
          transform transition-transform duration-300 
          ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header sidebar */}
                <div className="flex justify-between items-center mb-10">
                    <Link href="/" onClick={onClose}>
                        <Image
                            src="/logo/logo.png"
                            alt="logo"
                            width={100}
                            height={50}
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <button onClick={onClose} className="text-2xl cursor-pointer hover:text-yellow-200">
                        <IoClose />
                    </button>
                </div>

                {/* Menu */}
                <nav className="flex flex-col gap-6 text-lg">
                    <Link href="/" className={linkClass("/")} onClick={onClose}>
                        Trang Chủ
                    </Link>
                    <Link href="/hop-dong-mien-phi" className={linkClass("/hop-dong-mien-phi")} onClick={onClose}>
                        Kho Hợp Đồng
                    </Link>
                    <Link href="/nang-cap-dich-vu" className={linkClass("/nang-cap-dich-vu")} onClick={onClose}>
                        Nâng Cấp / Dịch vụ
                    </Link>
                    <Link href="/lien-he" className={linkClass("/lien-he")} onClick={onClose}>
                        Liên Hệ
                    </Link>
                    <Link href="/dang-nhap" className={linkClass("/dang-nhap")}>
                        Đăng Nhập
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
