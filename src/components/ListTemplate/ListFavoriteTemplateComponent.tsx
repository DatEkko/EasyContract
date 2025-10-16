'use client';
import Template from "@/components/ListTemplate/Template";
import { ITemplateFree } from "@/services/type.service";
import { useMemo } from "react";

interface ListTemplateComponentProps {
    data?: ITemplateFree;
}

const ListFavoriteTemplateComponent = ({ data }: ListTemplateComponentProps) => {
    const favoriteTemplates = useMemo(() => {
        return data?.results.filter(item => item.isFavorite) || [];
    }, [data?.results]);

    if (!data) {
        return <div>Không có dữ liệu</div>;
    }

    if (favoriteTemplates.length === 0) {
        return <div className="text-center py-10 text-gray-500">Không có template yêu thích</div>;
    }

    return (
        <div className="pt-5 px-5 md:px-10 pb-10">
            <h1 className="text-center font-bold text-3xl md:text-4xl py-5 md:py-10 text-econtract">
                Kho hợp đồng <span className="block md:inline">YÊU THÍCH</span>
            </h1>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {favoriteTemplates.map((item, index) => (
                    <div
                        key={index}
                        className="shadow-md border-3 rounded-xl overflow-hidden border-econtract"
                    >
                        <Template item={item} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListFavoriteTemplateComponent;
