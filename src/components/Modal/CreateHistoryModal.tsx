"use client";
import Modal from "../Modal/Modal";

interface HistoryModalProps {
    open: boolean;
    onClose: () => void;
    setNameHistory: (value: string) => void;
    nameHistory: string;
    handleCreateHistory: () => void;
}

const CreateHistoryModal: React.FC<HistoryModalProps> = ({
    nameHistory,
    setNameHistory,
    open,
    onClose,
    handleCreateHistory
}) => {
    return (
        <Modal
            open={open}
            title="Tạo lịch sử"
            onClose={() => {
                onClose();
                setNameHistory("");
            }}
        >
            <div className="my-5">
                <div className="border-2 rounded-2xl">
                    <input
                        value={nameHistory}
                        onChange={(e) => setNameHistory(e.target.value)}
                        className="w-full px-3 h-10 border-none outline-none" placeholder="Tên bản ghi" />
                </div>
                <div className="mt-3 text-right">
                    <button
                        onClick={handleCreateHistory}
                        className="border font-bold rounded-xl px-5 bg-econtract text-white py-2 outline-none cursor-pointer btn-transition">Lưu</button>
                </div>
            </div>
        </Modal>
    );
};

export default CreateHistoryModal;
