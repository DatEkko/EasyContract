"use client";
import Modal from "../Modal/Modal";

interface ActivationModalProps {
    open: boolean;
    onClose: () => void;
    setName: (value: string) => void;
    name: string;
    handleCreatePartner: () => void;
}

const CreatePartnerModal: React.FC<ActivationModalProps> = ({
    name,
    setName,
    open,
    onClose,
    handleCreatePartner
}) => {
    return (
        <Modal
            open={open}
            title="Lưu thông tin doanh nghiệp"
            onClose={() => {
                onClose();
                setName("");
            }}
        >
            <div className="my-5">
                <div className="border-2 rounded-2xl">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 h-10 border-none outline-none" placeholder="Tên gợi nhớ" />
                </div>
                <div className="mt-3 text-right">
                    <button
                        onClick={handleCreatePartner}
                        className="border font-bold rounded-xl px-5 bg-econtract text-white py-2 outline-none cursor-pointer btn-transition">Lưu</button>
                </div>
            </div>

        </Modal>
    );
};

export default CreatePartnerModal;
