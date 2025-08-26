const SolutionSection = () => {
    return (
        <section className="py-20 bg-gray-50 px-6 text-2xl">
            <div className="text-[#20253d]">
                <div className="font-bold text-6xl pt-10 pb-5">Chúng tôi cung cấp giải pháp cho bạn</div>
                <div className="text-2xl">Chỉ cần với <span className="font-black text-5xl text-blue-500">&quot;3&quot;</span> bước sau đây</div>
            </div>

            <div className="2xl:mx-auto w-fit">
                <div className="relative w-180 h-30 mt-10 ml-50 rounded-tr-full bg-gradient-to-r from-[#e9f5ff] to-[#aeddff] shadow-lg">
                    <div className="absolute bg-[#2dc2cf] text-white left-[-40] h-40 w-40 top-[-20] rounded-full flex items-center justify-center z-1 text-7xl font-bold">1</div>
                    <div className="h-full flex items-center justify-center">
                        Chọn <span className="font-bold ml-1 mr-1">mẫu hợp đồng</span> bạn muốn tạo
                    </div>
                </div>

                <div className="relative w-180 h-30 mt-20 ml-90 rounded-tr-full bg-gradient-to-r from-[#e9f5ff] to-[#aeddff] shadow-lg">
                    <div className="absolute bg-[#0f61f8] text-white left-[-40] h-40 w-40 top-[-20] rounded-full flex items-center justify-center z-1 text-7xl font-bold">2</div>
                    <div className="h-full flex items-center justify-center">Nhập các thông tin <span className="font-bold ml-1 mr-1">quan trọng</span></div>
                </div>

                <div className="relative w-180 h-30 mt-20 ml-130 rounded-tr-full bg-gradient-to-r from-[#e9f5ff] to-[#aeddff] shadow-lg">
                    <div className="absolute bg-[#093b86] text-white left-[-40] h-40 w-40 top-[-20] rounded-full flex items-center justify-center z-1 text-7xl font-bold">3</div>
                    <div className="h-full flex items-center justify-center">Xuất thành file <span className="font-bold ml-1 mr-1">WORD</span> </div>
                </div>
            </div>
        </section>
    );
}

export default SolutionSection;
