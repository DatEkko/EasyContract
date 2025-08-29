'use client';
import ListTemplate from "@/data/ListTemplate.json";
import Template from "@/components/Template";
import { useRouter } from 'next/navigation';

const TemplateFree = () => {
    const router = useRouter();
    const handleRedirect = (itemId: string) => {
        router.push(`/${itemId}`);
    };
    return (
        <div className="pt-5 px-5 md:px-10 pb-10">
            <h1 className="text-center font-bold text-4xl md:text-5xl py-5 md:py-10 text-[#20253d]">
                Kho hợp đồng <span className="block md:inline">MIỄN PHÍ</span>
            </h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {ListTemplate.map((item, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition shadow-md hover:shadow-xl duration-300 ease-in-out hover:scale-102 border-3 rounded-xl overflow-hidden border-[#20253d]"
                        onClick={() => handleRedirect(item.id)}
                    >
                        <Template item={item} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TemplateFree;