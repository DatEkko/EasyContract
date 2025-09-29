"use client"
import Image from "next/image";
import { useState } from "react";
import { PiEyesBold } from "react-icons/pi";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const RegisterComponent = () => {
    const [isShowPass, setIsShowPass] = useState<boolean>(false);
    const [isShowRePass, setIsShowRePass] = useState<boolean>(false);
    const hanldeShowHide = () => {
        setIsShowPass(!isShowPass);
    }

    const hanldeShowHideRePass = () => {
        setIsShowRePass(!isShowRePass);
    }

    return (
        <div className="min-h-screen w-full py-10 px-2 lg:px-10 xl:px-20 flex items-center justify-center text-econtract max-w-[1450px]">
            <div className="hidden xl:block relative w-[60%] h-full">
                <Image src={"/images/register_image.jpg"} fill alt="login-image" />
            </div>
            <div className="w-full sm:w-[80%] lg:w-[60%] xl:w-[40%] h-full">
                <div className="shadow-lg h-full px-5 sm:px-10 py-5">
                    {/* Title */}
                    <div>
                        <p className="text-2xl font-bold">Đăng ký tài khoản,</p>
                        <p className="text-3xl font-bold">Tham gia vào eContract</p>
                    </div>
                    {/* Đăng ký */}
                    <div className="flex items-center gap-2 mt-5">
                        <p className="">Đã có tài khoản? </p>
                        <Link href={"/dang-nhap"} className="underline font-bold cursor-pointer">Đăng nhập tại đây</Link>
                    </div>
                    {/* Input form */}
                    <div className="mt-8 text-lg">
                        <div className="border-2 w-full rounded-full">
                            <input className="px-6 h-14 w-full border-none outline-none" placeholder="Nhập email hoặc tên tài khoản" />
                        </div>
                        <div className="border-2 w-full rounded-full mt-5 relative">
                            <input className="px-6 h-14 w-full border-none outline-none" placeholder="Nhập mật khẩu" type={isShowPass ? "text" : "password"} />
                            <div
                                onClick={() => hanldeShowHide()}
                                className="absolute right-5 top-[30%] cursor-pointer text-2xl">
                                {isShowPass ? <BsFillEyeSlashFill /> : <PiEyesBold />}
                            </div>
                        </div>
                        <div className="border-2 w-full rounded-full mt-5 relative">
                            <input className="px-6 h-14 w-full border-none outline-none" placeholder="Nhập mật lại khẩu" type={isShowRePass ? "text" : "password"} />
                            <div
                                onClick={() => hanldeShowHideRePass()}
                                className="absolute right-5 top-[30%] cursor-pointer text-2xl">
                                {isShowRePass ? <BsFillEyeSlashFill /> : <PiEyesBold />}
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="border rounded-full mt-5 bg-econtract text-white btn-transition">
                        <button className="h-14 text-center w-full cursor-pointer font-bold">ĐĂNG KÝ</button>
                    </div>
                    {/* Divider */}
                    <div className="flex items-center mt-8 px-5 opacity-80">
                        <div className="flex-grow border-t border-econtract"></div>
                        <span className="px-3 text-sm">đăng nhập với</span>
                        <div className="flex-grow border-t border-econtract"></div>
                    </div>
                    <div className="flex mt-8 justify-center gap-5">
                        <div className="btn-transition border-2 text-red-500 border-red-500 w-full flex items-center justify-center gap-2 text-xl px-8 py-3 rounded-full cursor-pointer">
                            <FcGoogle /> Google
                        </div>
                        <div className="btn-transition border-2 text-white bg-black w-full flex items-center justify-center gap-2 text-xl px-8 py-3 rounded-full cursor-pointer">
                            <FaXTwitter /> Twitter
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent;