"use client";
import { ITemplateStructure } from "@/services/type.service";
import BaseDetailForm from "../BaseDetailForm";

interface TemplateProps {
    data?: ITemplateStructure;
}

export default function DetailTemplateComponent({ data }: TemplateProps) {
    if (!data || data.blocks.length === 0) {
        return (
            <div className="min-h-screen text-center px-5 md:px-10 text-econtract">
                <div className="text-3xl md:text-5xl my-10 font-bold">
                    Soạn thảo <span>{data?.name}</span>
                </div>
                <div>Hợp đồng hiện đang cập nhật. Vui lòng chọn hợp đồng khác.</div>
            </div>
        );
    }

    return <BaseDetailForm templateData={data} mode="create" />;
}
