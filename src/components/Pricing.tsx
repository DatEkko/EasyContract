"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import plans from "@/data/Plans.json";
import Link from "next/link";

const PricingSection = () => {
    return (
        <section className="py-10 bg-gray-50 px-6" id="pricing">
            <div className="max-w-7xl mx-auto text-center pb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Chọn gói dịch vụ phù hợp
                </h2>
                <p className="text-gray-600 mb-12">
                    Từ cá nhân đến doanh nghiệp, chúng tôi có giải pháp cho bạn.
                </p>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="min-h-145 sm:min-h-125"
                >
                    {plans.map((plan) => (
                        <SwiperSlide key={plan.name}>
                            <div
                                className={`min-h-110 max-w-100 mt-5 px-10 mx-auto p-8 rounded-2xl shadow-lg border bg-white flex flex-col h-full ${plan.highlighted
                                    ? "border-blue-600 scale-[1.02]"
                                    : "border-gray-200"
                                    }`}
                            >
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <p
                                    className={`text-3xl font-bold mb-6 ${plan.price.includes("đ")
                                        ? "text-blue-600"
                                        : "text-econtract text-2xl"
                                        }`}
                                >
                                    {plan.price}
                                </p>
                                <ul className="text-left space-y-3 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            👉
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="relative inline-block mt-10">
                                    <Link href={plan.link}
                                        className={`px-16 py-3 rounded-xl font-semibold transition cursor-pointer ${plan.highlighted
                                            ? "bg-blue-600 text-white hover:bg-blue-700 border-blink"
                                            : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                                            }`}
                                    >
                                        {plan.cta}
                                    </Link>

                                    {plan.highlighted && (
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl animate-bounce">
                                            👉
                                        </span>
                                    )}
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PricingSection;
