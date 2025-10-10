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
        "/((?!api|_next/static|_next/image|favicon.ico|nang-cap-dich-vu|lien-he|contractImage|images|logo|$|hop-dong$|dang-ky|xac-thuc|doi-mat-khau|dang-nhap$|$).*)",
    ],
}
