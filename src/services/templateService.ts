"use server"
import { sendAuRequest, sendRequest } from "@/library/api";
import { IPostRes, ITemplateFree, ITemplateStructure } from "./type.service";
import { auth } from "@/auth";

export const getListTemplateFreeService = async () => {
    const session = await auth();
    const userId = session?.user._id || "";
    const query = new URLSearchParams({
        current: "1",
        pageSize: "10",
        ...(userId ? { userId } : {}), // chỉ thêm nếu có userId
    }).toString();
    const res = await sendRequest<IBackendRes<ITemplateFree>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/templates/get-template?${query}`,
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

export const likeTemplateService = async (templateId: string) => {
    const session = await auth();
    const userId = session?.user._id || "";
    const res = await sendAuRequest<IBackendRes<IPostRes>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/favorites`,
        body: {
            templateId, userId
        }
    });
    return res;
};

export const unlikeTemplateService = async (templateId: string) => {
    const session = await auth();
    const userId = session?.user._id || "";
    const res = await sendAuRequest<IBackendRes<IPostRes>>({
        method: "DELETE",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/favorites/${userId}/${templateId}`,
    });
    return res;
};

