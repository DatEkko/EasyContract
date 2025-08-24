'use client';
import Template from "./Template";
import { useRouter } from 'next/navigation';
import ListTemplate from "@/data/ListTemplate.json";
import SearchBar from "./SearchBar";
import { useEffect, useRef, useState } from "react";

const Homepage = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false)

    const handleRedirect = (itemId: string) => {
        router.push(`/${itemId}`);
    };

    const popupRef = useRef<HTMLDivElement>(null)

    // Đóng khi click ra ngoài
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="relative min-h-screen text-center text-3xl pt-5 px-5 pb-10">
            <h1 className="font-bold text-5xl py-8">Xin chào, đây là Easy Contract</h1>
            <div className="fixed bottom-5 right-5 text-base bg-black z-10" ref={popupRef}>
                <div className="relative">
                    {/* Nút toggle */}
                    {!open && (
                        <button
                            onClick={() => setOpen(!open)}
                            className="border px-3 py-2 rounded-ee-xl cursor-pointer shadow transition"
                        >
                            Liên hệ để tạo Template riêng
                        </button>
                    )}

                    {/* Popup */}
                    {open && (
                        <div className="absolute bottom-full right-0 w-68 border rounded-lg shadow-lg p-4 text-sm text-left bg-black z-10">
                            <p><span className="font-semibold">SĐT:</span> 0398 960 639</p>
                            <p><span className="font-semibold">Email:</span> ngtiendat242002@gmail.com</p>
                            <p><span className="font-semibold">Zalo:</span> 0398 960 639</p>
                        </div>
                    )}
                </div>
            </div>

            <SearchBar />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ListTemplate.map((item, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition duration-300 ease-in-out hover:scale-102 hover:shadow-lg"
                        onClick={() => handleRedirect(item.id)}
                    >
                        <Template item={item} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
