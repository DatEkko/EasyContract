import { signIn } from "next-auth/react";
import { sendRequest } from "@/library/api";

export const handleLoginService = async (username: string, password: string) => {
    const res = await signIn("credentials", {
        callbackUrl: "/",
        redirect: false,
        username,
        password,
    });
    return res;
};

export const handleRegisterService = async (email: string, password: string, name: string) => {
    const res = await sendRequest<IBackendRes<IRegister>>({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/register`,
        body: { email, password, name },
    });
    return res;
};

export const resendActivationCodeService = async (userEmail: string) => {
    const res = await sendRequest<IBackendRes<IRegister>>({
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/retry-active`,
        method: "POST",
        body: { userEmail },
    });
    return res;
};

export const activateAccountService = async (_id: string, code: string) => {
    const res = await sendRequest<IBackendRes<IRegister>>({
        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/active-account`,
        method: "POST",
        body: { _id, code },
    });
    return res;
};
