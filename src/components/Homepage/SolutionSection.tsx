const SolutionSection = () => {
    return (
        <section className="pb-10 lg:py-20 bg-gray-50 px-2 md:px-4 lg:px-6 text-base md:text-2xl">
            <div className="text-econtract">
                <div className="font-bold text-3xl lg:text-6xl pt-10 pb-5">Chúng tôi cung cấp giải pháp cho bạn</div>
                <div className="text-base lg:text-2xl">Chỉ cần với <span className="font-black text-5xl text-blue-500">&quot;3&quot;</span> bước sau đây</div>
            </div>

            <div className="2xl:mx-auto w-full xl:w-fit flex flex-col items-center xl:block ml-5 lg:ml-0">
                <div className="relative w-80 md:w-170 lg:w-180 h-17 md:h-30 mt-10 xl:ml-50 rounded-tr-full bg-gradient-to-r from-alice-blue to-fresh-air shadow-lg">
                    <div className="absolute bg-ball-blue text-white left-[-40] h-17 w-17 md:h-40 md:w-40 top-0 md:top-[-20] rounded-full flex items-center justify-center z-1 text-5xl md:text-7xl font-bold">1</div>
                    <div className="h-full flex items-center justify-center">
                        Chọn <span className="font-bold ml-1 mr-1">mẫu hợp đồng</span> bạn muốn tạo
                    </div>
                </div>

                <div className="relative w-80 md:w-170 lg:w-180 h-17 md:h-30 mt-10 md:mt-20 xl:ml-90 rounded-tr-full bg-gradient-to-r from-alice-blue to-fresh-air shadow-lg">
                    <div className="absolute bg-brandeis-blue text-white left-[-40] h-17 w-17 md:h-40 md:w-40 top-0 md:top-[-20] rounded-full flex items-center justify-center z-1 text-5xl md:text-7xl font-bold">2</div>
                    <div className="h-full flex items-center justify-center">Nhập các thông tin <span className="font-bold ml-1 mr-1">quan trọng</span></div>
                </div>

                <div className="relative w-80 md:w-170 lg:w-180 h-17 md:h-30 mt-10 md:mt-20 xl:ml-130 rounded-tr-full bg-gradient-to-r from-alice-blue to-fresh-air shadow-lg">
                    <div className="absolute bg-dark-cerulean text-white left-[-40] h-17 w-17 md:h-40 md:w-40 top-0 md:top-[-20] rounded-full flex items-center justify-center z-1 text-5xl md:text-7xl font-bold">3</div>
                    <div className="h-full flex items-center justify-center">Xuất thành file <span className="font-bold ml-1 mr-1">WORD</span> </div>
                </div>
            </div>
        </section>
    );
}

export default SolutionSection;
