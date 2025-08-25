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
        <div className="pt-5 px-10 pb-10">
            <h1 className="text-center font-bold text-5xl py-10 text-[#20253d]">Kho hợp đồng MIỄN PHÍ</h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ListTemplate.map((item, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition duration-300 ease-in-out hover:scale-102 hover:shadow-lg h-fit"
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