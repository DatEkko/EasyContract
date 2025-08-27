import { FaDatabase } from "react-icons/fa";
import { IoFlash } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa6";
import { RiContractFill } from "react-icons/ri";
import { FaPiggyBank } from "react-icons/fa";

const FeatureSection = () => {
    return (
        <div className="h-fit bg-[#033b90] text-white mt-10 px-5 py-10 lg:p-20">
            <div className="xl:flex gap-25">
                <div className="mb-20 xl:mb-0">
                    <div className="text-3xl font-bold">Tính năng nổi bật</div>
                    <div className="text-6xl lg:text-8xl font-black pt-5 pb-2">eContract</div>
                    <div className="text-xl">Đơn giản hóa việc soạn thảo văn bản, hợp đồng</div>
                </div>
                <div className="flex gap-12 flex-wrap">
                    <div className="w-full md:w-[45%]">
                        <div className="w-18 h-18 rounded-full flex items-center justify-center bg-white text-[#033b90] text-3xl mb-4"><FaDatabase /></div>
                        <div className="text-3xl font-bold pb-4">
                            Kho hợp đồng lớn
                        </div>
                        <div className="text-justify">
                            Tập hợp hơn <span className="font-black">100+</span> mẫu hợp đồng thông dụng, được biên soạn sẵn theo nhiều lĩnh vực: lao động, kinh doanh, dân sự, dịch vụ…
                        </div>
                    </div>

                    <div className="w-full md:w-[45%]">
                        <div className="w-18 h-18 rounded-full flex items-center justify-center bg-white text-[#033b90] text-3xl mb-4"><RiContractFill /></div>
                        <div className="text-3xl font-bold pb-4">
                            Tạo hợp đồng nhanh
                        </div>
                        <div className="text-justify">
                            Có thể xuất ngay hợp đồng ra định dạng Word hoặc PDF chỉ với một cú nhấp chuột, tiết kiệm tối đa thời gian xử lý thủ công.
                        </div>
                    </div>

                    <div className="w-full md:w-[45%]">
                        <div className="w-18 h-18 rounded-full flex items-center justify-center bg-white text-[#033b90] text-3xl mb-4"><FaUserLock /></div>
                        <div className="text-3xl font-bold pb-4">
                            Tạo hợp đồng riêng
                        </div>
                        <div className="text-justify">
                            Mỗi khách hàng có thể tạo bộ mẫu riêng, dễ dàng tái sử dụng, giúp tiết kiệm thời gian và đảm bảo tính chính xác trong mọi giao dịch.
                        </div>
                    </div>

                    <div className="w-full md:w-[45%]">
                        <div className="w-18 h-18 rounded-full flex items-center justify-center bg-white text-[#033b90] text-3xl mb-4"><IoFlash /></div>
                        <div className="text-3xl font-bold pb-4">
                            Lưu thông tin nhanh
                        </div>
                        <div className="text-justify">
                            Lưu sẵn toàn bộ thông tin đối tác, từ tên, địa chỉ, đến điều khoản cơ bản. Dữ liệu sẽ được tự động điền vào mẫu chỉ trong vài giây.
                        </div>
                    </div>

                    <div className="w-full md:w-[45%]">
                        <div className="w-18 h-18 rounded-full flex items-center justify-center bg-white text-[#033b90] text-3xl mb-4"><FaPiggyBank /></div>
                        <div className="text-3xl font-bold pb-4">
                            Sử dụng miễn phí
                        </div>
                        <div className="text-justify">
                            Bạn có thể sử dụng các template có sẵn của chúng tôi hoàn toàn miễn phí, không giới hạn số lần.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection;