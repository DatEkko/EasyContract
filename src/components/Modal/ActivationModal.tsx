"use client";

import Modal from "../Modal/Modal";

interface ActivationModalProps {
    open: boolean;
    onClose: () => void;
    step: number;
    setStep: (step: number) => void;
    username: string;
    activeCode: string;
    setActiveCode: (value: string) => void;
    handleSendEmail: () => void;
    handleReActiveAccount: () => void;
}

const ActivationModal: React.FC<ActivationModalProps> = ({
    open,
    onClose,
    step,
    setStep,
    username,
    activeCode,
    setActiveCode,
    handleSendEmail,
    handleReActiveAccount
}) => {
    return (
        <Modal
            open={open}
            title="Tài khoản chưa kích hoạt"
            onClose={() => {
                onClose();
                setStep(0);
                setActiveCode("");
            }}
        >
            <>
                {step === 0 && (
                    <>
                        Vui lòng ấn vào nút bên dưới để kích hoạt tài khoản
                        <br />
                        <button
                            onClick={handleSendEmail}
                            className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                        >
                            Gửi lại mã kích hoạt
                        </button>
                    </>
                )}

                {step === 1 && (
                    <>
                        Mã kích hoạt đã được gửi vào email:{" "}
                        <p className="font-bold">{username}</p>
                        <div className="border rounded-4xl mt-3">
                            <input
                                value={activeCode}
                                onChange={(event) => setActiveCode(event.target.value)}
                                placeholder="Vui lòng nhập mã kích hoạt"
                                className="h-14 border-none outline-none px-5 w-full"
                            />
                        </div>
                        <button
                            onClick={handleReActiveAccount}
                            className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                        >
                            Kích hoạt tài khoản
                        </button>
                    </>
                )}
            </>
        </Modal>
    );
};

export default ActivationModal;
