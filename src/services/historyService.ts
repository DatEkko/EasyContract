'use server'
import { auth } from "@/auth";
import { sendAuRequest } from "@/library/api";
import { ICreateHistory, IGetHistory, IListHistory, IPostRes } from "./type.service";

export const createHistoryService = async (data: ICreateHistory) => {
    const session = await auth();
    const userId = session?.user._id || "";
    const res = await sendAuRequest<IBackendRes<IPostRes>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/histories`,
        body: {
            ...data, userId
        }
    });
    return res;
};

export const getListHistoryService = async () => {
    const session = await auth();
    const userId = session?.user._id || "";
    const res = await sendAuRequest<IBackendRes<IListHistory>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/histories/get-history/${userId}`,
    });
    return res;
};

export const gettHistoryByIdService = async (id: string) => {
    const res = await sendAuRequest<IBackendRes<IGetHistory>>({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/histories/${id}`,
    });
    return res;
};

export const updatetHistoryByIdService = async (data: ICreateHistory) => {
    const res = await sendAuRequest<IBackendRes<IGetHistory>>({
        method: "PATCH",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/histories`,
        body: {
            ...data
        }
    });
    return res;
};