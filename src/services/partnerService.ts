'use server'
import { auth } from "@/auth";
import { PartyInfo } from "@/blocks/type.block";
import { sendAuRequest } from "@/library/api";
import { IPostRes } from "./type.service";

export const createPartnerService = async (data: PartyInfo) => {
    const session = await auth();
    const userId = session?.user._id || "";
    const res = await sendAuRequest<IBackendRes<IPostRes>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/partners`,
        body: {
            ...data, userId
        }
    });
    return res;
};

export const getPartnerService = async () => {
    const session = await auth();
    const userId = session?.user._id || "";
    const res = await sendAuRequest<IBackendRes<PartyInfo[]>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/partners/${userId}`,
    });
    return res;
};

export const deletePartnerService = async (id: string) => {
    const res = sendAuRequest<IBackendRes<IPostRes>>({
        url: `${process.env.NEXT_PUBLIC_BE_URL}/partners/${id}`,
        method: "DELETE",
    });
    return res;
};