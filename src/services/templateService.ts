"use server"
import { sendRequest } from "@/library/api";
import { ITemplateFree, ITemplateStructure } from "./type.service";

export const getListTemplateFreeService = async () => {
    const res = await sendRequest<IBackendRes<ITemplateFree>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/templates/get-template`,
    });
    return res;
};

export const getTemplateFreeByIdService = async (id: string) => {
    const res = await sendRequest<IBackendRes<ITemplateStructure>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/templates/${id}`,
    });
    return res;
};

