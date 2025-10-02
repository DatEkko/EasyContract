import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { sendRequest } from "@/library/api";
import { IUser } from "@/types/next-auth";
import { isSuccess } from "./library/typeGuard";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
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
                    //Tạo user giả để bắt lỗi chi tiết
                    return {
                        id: "error",
                        errorType: res.statusCode === 401 ? "WrongInformation" : "NotActivated",
                    };
                }

                const backendData = res.data?.data;

                // Nếu thành công, trả về user
                const user = {
                    _id: backendData?.user._id,
                    name: backendData?.user.name,
                    email: backendData?.user.email,
                    access_token: backendData?.access_token,
                    role: backendData?.user.role,
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
        },
        //Kiểm tra xem đăng nhập thành công hay thất bại
        async signIn({ user, account }) {
            // Case login bằng Credentials
            if (user.id === "error" && user.errorType) {
                return `/auth/login?error=${user.errorType}`;
            }

            // Case login bằng OAuth (Google, Twitter)
            if (account?.provider === "google" || account?.provider === "twitter") {
                try {
                    await sendRequest<IBackendRes<IUser>>({
                        method: "POST",
                        url: `${process.env.NEXT_PUBLIC_BE_URL}/auth/oauth`,
                        body: {
                            email: user.email,
                            name: user.name,
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                        },
                    });
                } catch (err) {
                    console.error("OAuth user creation failed", err);
                    return false; // reject login nếu BE lỗi
                }

                return true;
            }

            return true;
        },
    },
})