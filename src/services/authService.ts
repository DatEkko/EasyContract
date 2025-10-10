import { signIn } from "next-auth/react";
import { sendRequest } from "@/library/api";
import { IPostRes } from "./type.service";

export type ChangePass = {
    code: string,
    password: string,
    confirmPassword: string,
    userEmail: string
}

export const handleLoginService = async (username: string, password: string) => {
    const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
    });
    return res;
};

export const handleRegisterService = async (email: string, password: string, name: string) => {
    const res = await sendRequest<IBackendRes<IPostRes>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/register`,
        body: { email, password, name },
    });
    return res;
};

export const resendActivationCodeService = async (userEmail: string) => {
    const res = await sendRequest<IBackendRes<IPostRes>>({
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/retry-active`,
        method: "POST",
        body: { userEmail },
    });
    return res;
};

export const activateAccountService = async (_id: string, code: string) => {
    const res = await sendRequest<IBackendRes<IPostRes>>({
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/active-account`,
        method: "POST",
        body: { _id, code },
    });
    return res;
};

export const sendActivationCodeForChangePasswordService = async (userEmail: string) => {
    const res = await sendRequest<IBackendRes<IPostRes>>({
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/retry-password`,
        method: "POST",
        body: { userEmail },
    });
    return res;
};

export const changePasswordService = async (data: ChangePass) => {
    const res = await sendRequest<IBackendRes<IPostRes>>({
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/change-password`,
        method: "POST",
        body: {
            ...data
        },
    });
    return res;
};
