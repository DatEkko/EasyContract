"use client"
import { activateAccountService } from "@/services/authService";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react"

const VerfifyComponent = () => {
    const params = useParams<{ _id: string }>();
    const router = useRouter();
    const [verifyCode, setVerifyCode] = useState("");

    const handleActiveAccount = async () => {
        const res = await activateAccountService(params._id, verifyCode);

        if (res.success) {
            alert("Xác thực tài khoản thành công")
            router.push(`/dang-nhap`);
        } else {
            alert(res.message)
        }
    }

    return (
        <div className="min-h-screen max-w-[1450px] w-full p-5 flex justify-center">
            <div className="max-w-[800px] h-fit mt-10 p-10 shadow-2xl rounded-3xl">
                <p className="mt-2 text-xl font-bold">Mã xác thực đã được gửi vào Email của bạn, vui lòng kiểm tra</p>
                <div className="border mt-5 rounded-4xl">
                    <input
                        value={verifyCode}
                        onChange={(event) => setVerifyCode(event.target.value)}
                        className="w-full h-14 px-5 border-none outline-none"
                        placeholder="Vui lòng nhập mã xác thực" />
                </div>
                <div className="mt-5 text-center">
                    <button
                        onClick={() => handleActiveAccount()}
                        className="border rounded-2xl h-10 px-5 cursor-pointer btn-transition bg-econtract text-white font-bold">XÁC THỰC</button>
                </div>
            </div>

        </div>
    )
}

export default VerfifyComponent