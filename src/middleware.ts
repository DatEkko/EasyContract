// middleware.ts
import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
    // Nếu chưa đăng nhập
    if (!req.auth) {
        return NextResponse.redirect(new URL("/dang-nhap", req.url))
    }
    // Cho qua nếu ok
    return NextResponse.next()
})

export const config = {
    matcher: [
        // bảo vệ tất cả route trừ public
        "/((?!api|_next/static|_next/image|favicon.ico|images|logo|dang-ky|xac-thuc|dang-nhap$|$).*)",
    ],
}
