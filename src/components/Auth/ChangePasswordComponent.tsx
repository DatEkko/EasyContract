"use client"
import { ChangePass, changePasswordService, sendActivationCodeForChangePasswordService } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ChangePasswordComponent = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [current, setCurrent] = useState<number>(0);
    const [code, setCode] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSendEmail = async () => {
        const res = await sendActivationCodeForChangePasswordService(email);
        if (!res.success) {
            alert(res.message)
            return
        }
        setCurrent(1);
    }

    const handleChangePassword = async () => {
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp");
            return
        }
        const payload: ChangePass = {
            code,
            password,
            confirmPassword,
            userEmail: email
        }
        const res = await changePasswordService(payload);
        if (!res.success) {
            alert(res.message)
            return
        } else {
            alert("Đổi mật khẩu thành công. Vui lòng đăng nhập lại");
            router.push("/dang-nhap");
        }
    }

    return (
        <div className="min-h-screen w-full max-w-[600px] p-10 text-econtract">
            {
                current === 0 &&
                <div className="shadow-2xl w-full mt-5 p-5 rounded-4xl bg-white">
                    <p className="font-bold text-2xl text-center mt-3">Đổi mật khẩu</p>
                    <div className="mt-8">
                        <p>Vui lòng nhập email của bạn</p>
                        <div className="border rounded-3xl mt-3">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Nhập email"
                                className="h-14 border-none outline-none px-5 w-full"
                            />
                        </div>
                    </div>
                    <div className="mt-3 text-right">
                        <button
                            onClick={() => handleSendEmail()}
                            className="border px-4 py-2 rounded-3xl bg-econtract text-white cursor-pointer btn-transition">Xác nhận</button>
                    </div>
                </div>
            }

            {
                current === 1 &&
                <div className="shadow-2xl w-full mt-5 p-5 rounded-4xl bg-white">
                    <p className="font-bold text-2xl text-center mt-3">Đổi mật khẩu</p>
                    <div className="mt-8">
                        <p>Mã kích hoạt đã được gửi đến email của bạn</p>
                        <div className="border rounded-3xl mt-3">
                            <input
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Nhập mã kích hoạt"
                                className="h-14 border-none outline-none px-5 w-full"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>Mật khẩu mới</p>
                        <div className="border rounded-3xl mt-3">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Nhập mật khẩu"
                                className="h-14 border-none outline-none px-5 w-full"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>Xác nhận mật khẩu</p>
                        <div className="border rounded-3xl mt-3">
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Nhập lại mật khẩu"
                                className="h-14 border-none outline-none px-5 w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-5 text-right">
                        <button
                            onClick={() => setCurrent(0)}
                            className="border px-4 py-2 rounded-3xl bg-gray-100 text-econtract cursor-pointer btn-transition mr-5">Trở về</button>
                        <button
                            onClick={() => handleChangePassword()}
                            className="border px-4 py-2 rounded-3xl bg-econtract text-white cursor-pointer btn-transition">Đổi mật khẩu</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default ChangePasswordComponent;