const CTASection = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-center text-white">
            {/* Ảnh nền */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('images/cta_image.jpg')" }}
            />
            {/* Lớp phủ mờ */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Nội dung CTA */}
            <div className="relative z-10 text-center mx-50">
                <h2 className="text-5xl font-bold">Một cú nhấp chuột, hợp đồng hoàn chỉnh.</h2>
                <p className="text-lg mx-30 text-justify my-10">Thay vì phải loay hoay soạn thảo từng chi tiết, chỉnh sửa lặp đi lặp lại, giờ đây bạn có thể bắt đầu với <span className="text-2xl font-bold">eContract</span> cùng những mẫu hợp đồng sẵn có, tùy chỉnh linh hoạt và xuất ra chỉ trong vài phút. Nhanh hơn, gọn hơn và chuyên nghiệp hơn — đã đến lúc để quy trình hợp đồng trở nên nhẹ nhàng!</p>
                <button className="bg-[#1c30b0] text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition cursor-pointer">
                    Dùng thử ngay hôm nay
                </button>
            </div>
        </div>
    )
}

export default CTASection
