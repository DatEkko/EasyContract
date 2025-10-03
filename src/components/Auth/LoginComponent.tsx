"use client"
import Image from "next/image";
import { useState } from "react";
import { PiEyesBold } from "react-icons/pi";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import ActivationModal from "../Modal/ActivationModal";
import { activateAccountService, handleLoginService, resendActivationCodeService } from "@/services/authService";
import { signIn } from "next-auth/react";

const LoginComponent = () => {
    const [showActivation, setShowActivation] = useState<boolean>(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPass, setIsShowPass] = useState<boolean>(false);
    const [activeCode, setActiveCode] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [step, setStep] = useState(0);
    const hanldeShowHide = () => {
        setIsShowPass(!isShowPass);
    }

    const handleLogin = async () => {
        const res = await handleLoginService(username, password);
        if (res?.error === "NotActivated") {
            setShowActivation(true);
        } else if (res?.error === "WrongInformation") {
            alert("Sai thông tin đăng nhập");
        }
        else if (res?.error) {
            alert("Lỗi server");

        } else if (res?.ok) {
            window.location.href = "/";
            alert("Đăng nhập thành công");
        }
    };

    const handleSendEmail = async () => {
        setStep(1);
        const res = await resendActivationCodeService(username);
        if (res?.success && res.data?.data) {
            setUserId(res.data.data._id);
        }
    };

    const handleReActiveAccount = async () => {
        const res = await activateAccountService(userId, activeCode);
        if (res.success) {
            setShowActivation(false);
            alert("Kích hoạt tài khoản thành công. Vui lòng đăng nhập lại");
        } else {
            alert(res.message);
        }
    };

    return (
        <>
            <div className="min-h-screen w-full py-10 px-2 lg:px-10 xl:px-20 flex items-center justify-center text-econtract max-w-[1450px]">
                <div className="hidden xl:block relative w-[60%] h-full">
                    <Image src={"/images/login_image.jpg"} fill alt="login-image" />
                </div>
                <div className="w-full sm:w-[80%] lg:w-[60%] xl:w-[40%] h-full">
                    <div className="shadow-lg h-full px-5 sm:px-10 py-5">
                        {/* Title */}
                        <div>
                            <p className="text-2xl font-bold">Xin chào,</p>
                            <p className="text-3xl font-bold">Đây là eContract</p>
                        </div>
                        {/* Đăng ký */}
                        <div className="flex items-center gap-2 mt-5">
                            <p className="">Người dùng mới? </p>
                            <Link href={"/dang-ky"} className="underline font-bold cursor-pointer">Đăng ký tại đây</Link>
                        </div>
                        {/* Input form */}
                        <div className="mt-8 text-lg">
                            <div className="border-2 w-full rounded-full">
                                <input
                                    className="px-6 h-14 w-full border-none outline-none"
                                    placeholder="Nhập email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="border-2 w-full rounded-full mt-5 relative">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="px-6 h-14 w-full border-none outline-none"
                                    placeholder="Nhập mật khẩu"
                                    type={isShowPass ? "text" : "password"} />
                                <div
                                    onClick={() => hanldeShowHide()}
                                    className="absolute right-5 top-[30%] cursor-pointer text-2xl">
                                    {isShowPass ? <BsFillEyeSlashFill /> : <PiEyesBold />}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-right cursor-pointer underline">
                            <Link href={'/doi-mat-khau'}>Quên mật khẩu?</Link>
                        </div>
                        {/* Button */}
                        <div className="border rounded-full mt-5 bg-econtract text-white btn-transition">
                            <button
                                onClick={handleLogin}
                                className="h-14 text-center w-full cursor-pointer font-bold">ĐĂNG NHẬP</button>
                        </div>
                        {/* Divider */}
                        <div className="flex items-center mt-8 px-5 opacity-80">
                            <div className="flex-grow border-t border-econtract"></div>
                            <span className="px-3 text-sm">đăng nhập nhanh với</span>
                            <div className="flex-grow border-t border-econtract"></div>
                        </div>
                        <div className="flex mt-8 justify-center gap-5">
                            <div
                                onClick={() => signIn("google", { callbackUrl: "/" })}
                                className="btn-transition border-2 text-red-500 border-red-500 w-full flex items-center justify-center gap-2 text-xl px-8 py-3 rounded-full cursor-pointer">
                                <FcGoogle /> Google
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ActivationModal
                open={showActivation}
                onClose={() => setShowActivation(false)}
                step={step}
                setStep={setStep}
                username={username}
                activeCode={activeCode}
                setActiveCode={setActiveCode}
                handleSendEmail={handleSendEmail}
                handleReActiveAccount={handleReActiveAccount}
            />
        </>

    )
}

export default LoginComponent;