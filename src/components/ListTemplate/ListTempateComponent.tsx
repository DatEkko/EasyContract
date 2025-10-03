'use client';
import Template from "@/components/ListTemplate/Template";
import { useRouter } from 'next/navigation';

interface ListTemplateComponentProps {
    data?: ITemplateFree;
}

const ListTemplateComponent = ({ data }: ListTemplateComponentProps) => {
    const router = useRouter();
    if (!data) {
        return <div>Không có dữ liệu</div>;
    }
    const listTemplate = data.results;
    const handleRedirect = (itemId: string) => {
        router.push(`/hop-dong/${itemId}`);
    };

    return (
        <div className="pt-5 px-5 md:px-10 pb-10">
            <h1 className="text-center font-bold text-3xl md:text-4xl py-5 md:py-10 text-econtract">
                Kho hợp đồng <span className="block md:inline">MIỄN PHÍ</span>
            </h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {listTemplate.map((item, index) => (
                    <div
                        key={index}
                        className="cursor-pointer transform transition shadow-md hover:shadow-xl duration-300 ease-in-out hover:scale-102 border-3 rounded-xl overflow-hidden border-econtract"
                        onClick={() => handleRedirect(item._id)}
                    >
                        <Template item={item} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListTemplateComponent;