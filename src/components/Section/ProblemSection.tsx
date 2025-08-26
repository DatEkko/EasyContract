import Image from "next/image";

const ProblemSection = () => {
    return (
        <section className="pt-10 pb-20 bg-[#20253d] px-6 text-xl">
            <div className="relative">
                <div className="font-bold text-5xl py-10 mb-15 text-white">Những vấn đề bạn hay gặp phải</div>
                <div className="relative w-90 h-90 rounded-full overflow-hidden mx-auto shadow-xl shadow-gray-400/60">
                    <Image src={'/images/problem_image.jpg'} alt="problem-image" fill />
                </div>

                <div className="absolute top-50 right-30">
                    <div className="relative w-fit p-4 bg-blue-500 text-white rounded-2xl">
                        Mất thời gian lặp đi lặp lại
                        {/* Đuôi bong bóng */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-blue-500 rounded-br-2xl"></div>
                    </div>
                </div>

                <div className="absolute top-85 right-30">
                    <div className="relative w-fit p-4 bg-blue-500 text-white rounded-2xl">
                        Dễ sai sót thông tin
                        {/* Đuôi bong bóng */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-blue-500 rounded-br-2xl"></div>
                    </div>
                </div>

                <div className="absolute top-120 right-30">
                    <div className="relative w-fit p-4 bg-blue-500 text-white rounded-2xl">
                        Khó tìm lại phiên bản cũ
                        {/* Đuôi bong bóng */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-blue-500 rounded-br-2xl"></div>
                    </div>
                </div>

                <div className="absolute top-50 left-20">
                    <div className="relative w-fit max-w-sm p-4 bg-blue-500 text-white rounded-2xl">
                        Không có mẫu chuẩn đặc thù
                        {/* Đuôi bong bóng */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-blue-500 rounded-bl-2xl"></div>
                    </div>
                </div>

                <div className="absolute top-85 left-20">
                    <div className="relative w-fit max-w-sm p-4 bg-blue-500 text-white rounded-2xl">
                        Thiếu tính linh hoạt
                        {/* Đuôi bong bóng */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-blue-500 rounded-bl-2xl"></div>
                    </div>
                </div>

                <div className="absolute top-120 left-20">
                    <div className="relative w-fit max-w-sm p-4 bg-blue-500 text-white rounded-2xl">
                        Không đồng nhất giữa các biên bản
                        {/* Đuôi bong bóng */}
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-blue-500 rounded-bl-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProblemSection;
