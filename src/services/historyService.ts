'use server'
import { auth } from "@/auth";
import { sendAuRequest } from "@/library/api";
import { ICreateHistory, IPostRes } from "./type.service";

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