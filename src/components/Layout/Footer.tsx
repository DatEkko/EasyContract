"use client"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-5 lg:px-20 py-10 flex flex-wrap lg:flex-nowrap gap-20">
                {/* Logo + intro */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Easy Contract</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Nền tảng giúp bạn tạo, quản lý và xuất hợp đồng nhanh chóng, chuyên nghiệp và bảo mật.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3 whitespace-nowrap">Sản phẩm</h3>
                    <ul className="space-y-2 text-sm whitespace-nowrap">
                        <li>
                            <Link href="/contracts" className="hover:text-white">
                                Kho hợp đồng
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white">
                                Liên hệ
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="hover:text-white">
                                Bảng giá
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Social</h3>
                    <div className="flex gap-4 text-xl">
                        <Link href="https://www.facebook.com/ng.tien.at.77590" target="_blank" className="hover:text-white">
                            <FaFacebook />
                        </Link>
                        <Link href="https://github.com/DatEkko" target="_blank" className="hover:text-white">
                            <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-nguy%E1%BB%85n-882939278/" target="_blank" className="hover:text-white">
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Kết nối</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2"><IoMail />ngtiendat242002@gmail.com</div>
                        <div className="flex items-center gap-2"><FaPhoneAlt />0398960639</div>
                        <div className="flex items-center gap-2 whitespace-nowrap"><FaLocationDot />84, QL80, Châu Thành, Đồng Tháp</div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Easy Contract. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
