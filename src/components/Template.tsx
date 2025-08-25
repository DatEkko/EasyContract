import Image from "next/image"

type TemplateProps = {
    item: {
        id?: string
        name?: string
        image?: string
        description?: string
    },
    index: number
}

const Template = ({ item, index }: TemplateProps) => {
    return (
        <div className="w-full bg-white border-3 border-[#20253d] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            {/* Hình + overlay */}
            <div className="relative w-full h-[200px]">
                <Image
                    src={item.image ? `/contractImage/${item.image}` : "/contractImage/default.jpg"}
                    fill
                    alt={item.image ? item.image : "anh-hop-dong"}
                    className="object-cover"
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
        </div>
    )
}

export default Template
