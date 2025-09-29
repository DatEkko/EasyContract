import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { sendRequest } from "@/library/api";
import { IUser } from "@/types/next-auth";
import { isSuccess } from "./library/typeGuard";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                const res = await sendRequest<IBackendRes<ILogin>>({
                    method: "POST",
                    url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/login`,
                    body: {
                        username: credentials.username,
                        password: credentials.password
                    }
                });

                if (!isSuccess(res)) {
                    throw new Error(res.message || "Server error");
                }

                // Nếu thành công, trả về user
                const user = {
                    _id: res.data?.user?._id,
                    name: res.data?.user?.name,
                    email: res.data?.user?.email,
                    access_token: res.data?.access_token,
                    role: res.data?.user?.role,
                }

                return user;
            }

        }),
    ],
    pages: {
        signIn: "/dang-nhap",
    },
    trustHost: true,
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.user = (user as IUser);
            }
            return token;
        },
        session({ session, token }) {
            (session.user as IUser) = token.user;
            return session;
        }
    },
})