"use client"
import { likeTemplateService, unlikeTemplateService } from "@/services/templateService"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa";

type TemplateProps = {
    item: {
        _id?: string
        name?: string
        isFavorite?: boolean
        description?: string
    },
    index: number
}

const Template = ({ item, index }: TemplateProps) => {
    const router = useRouter();
    const [isFavorite, setIsFavorite] = useState(item.isFavorite || false);
    const { data: session } = useSession();

    const handleLikeOrUnlikeTemplate = async (templateId: string) => {
        if (!session) {
            alert("Vui lòng đăng nhập");
            return;
        }
        if (!templateId) return;
        if (isFavorite) {
            const res = await unlikeTemplateService(templateId);
            if (res.success) {
                setIsFavorite(false);
            } else {
                alert(res.message);
            }
        } else {
            const res = await likeTemplateService(templateId);
            if (res.success) {
                setIsFavorite(true);
            } else {
                alert(res.message);
            }
        }
    };

    const handleRedirect = (itemId: string) => {
        router.push(`/hop-dong/${itemId}`);
    };

    return (
        <div className="w-full bg-white flex flex-col h-full">
            {/* Hình + overlay */}
            <div className="relative w-full h-[200px]">
                <Image
                    src={"/contractImage/default.jpg"}
                    fill
                    alt={"anh-hop-dong"}
                    className="object-cover"
                    unoptimized
                />
                <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-white via-white/70 to-transparent"></div>

                {/* Badge số thứ tự */}
                <div className="absolute flex items-center justify-center text-white font-bold 
                        rounded-full h-10 w-10 bg-blue-600 shadow-md right-3 top-3">
                    {index + 1}
                </div>
            </div>

            {/* Nội dung */}
            <div className="text-left p-5">
                <div className="text-xl font-bold text-blue-700">{item.name?.toLocaleUpperCase()}</div>
                <div className="text-sm text-gray-600 leading-6 mt-3 line-clamp-3">
                    {item.description || ""}
                </div>
            </div>

            <div className="mt-auto px-5 pb-5 flex justify-center items-center gap-2">
                <button
                    aria-pressed={isFavorite}
                    onClick={() => item._id && handleLikeOrUnlikeTemplate(item._id)}
                    className="border cursor-pointer h-10 w-10 hover:bg-econtract hover:text-white rounded-full flex items-center justify-center"
                >
                    {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                </button>

                <div
                    onClick={() => item._id && handleRedirect(item._id)}
                    className="flex-1 font-bold text-center border cursor-pointer px-3 py-2 hover:bg-econtract hover:text-white rounded-2xl"
                >
                    Dùng Mẫu Này
                </div>
            </div>
        </div>
    )
}

export default Template
