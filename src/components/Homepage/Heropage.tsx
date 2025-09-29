import Link from "next/link";

const HeroPage = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-50 to-white md:px-6">
            {/* Tiêu đề chính */}
            <h1 className="text-4xl md:text-6xl font-bold my-4">
                Soạn hợp đồng <span className="text-blue-600">nhanh chóng & chính xác</span>
            </h1>

            {/* Mô tả ngắn */}
            <p className="text-lg text-justify md:text-center md:text-xl text-gray-600 max-w-2xl mb-8">
                Nhập thông tin cơ bản, hệ thống tự động sinh hợp đồng chuẩn.
                Không còn lo copy-paste sai sót, chỉ mất chưa đến 1 phút.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col md:flex-row gap-4">
                <Link href={"/hop-dong-mien-phi"}>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                        🚀 Dùng thử miễn phí
                    </button>
                </Link>
                <Link href={"/tao-hop-dong"}>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition cursor-pointer">
                        📞 Liên hệ tạo template riêng
                    </button>
                </Link>
            </div>

            {/* Hình minh họa giả lập */}
            <div className="mt-12 w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
                <div className="text-left">
                    <p className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">Mẫu hợp đồng:</p>
                    <div className="text-base lg:text-3xl border rounded-lg p-4 text-gray-600 leading-relaxed">
                        <p><strong>Bên A:</strong> Công ty ABC</p>
                        <p><strong>Bên B:</strong> Công ty XYZ</p>
                        <p className="mt-2">Điều 1: Bên A đồng ý bán cho Bên B danh sách hàng hóa...</p>
                        <p className="mt-2 italic text-sm text-gray-400">👉 Chỉ cần nhập thông tin, hợp đồng sẽ được sinh tự động.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage;