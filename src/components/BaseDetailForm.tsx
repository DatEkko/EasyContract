"use client";
import { FaRegFileWord, FaHistory } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { exportToWord } from "@/utils/exportWord";
import { ITemplateStructure, IGetHistory } from "@/services/type.service";
import { useBaseDetailLogic } from "@/hooks/useBaseDetailLogic";
import DynamicForm from "./DetailTemplate/DynamicForm";
import CreateHistoryModal from "./Modal/CreateHistoryModal";


interface BaseDetailFormProps {
    mode: "create" | "update";
    templateData?: ITemplateStructure;
    historyData?: IGetHistory;
    onSuccess?: () => void;
}

const BaseDetailForm = ({ mode, templateData, historyData, onSuccess }: BaseDetailFormProps) => {
    const {
        rows,
        errors,
        handleChange,
        addRow,
        deleteRow,
        tongHopDong,
        validateRows,
        allFields,
        formData,
        setFormData,
        nameHistory,
        setNameHistory,
        isOpenModal,
        setIsOpenModal,
        handleCreateHistory,
        handleUpdateHistory,
    } = useBaseDetailLogic({ mode, templateData, historyData, onSuccess });

    return (
        <>
            <div className="min-h-screen px-5 md:px-10 text-center">
                <div className="text-3xl md:text-5xl my-10 font-bold">
                    Soạn thảo{" "}
                    <span className="block md:inline">{templateData?.name.toLocaleUpperCase()}</span>
                </div>

                <DynamicForm
                    fields={allFields}
                    rows={rows}
                    errors={errors}
                    handleChange={handleChange}
                    deleteRow={deleteRow}
                    formData={formData}
                    setFormData={setFormData}
                />

                <div className="mt-4 text-center md:text-right text-xl md:text-2xl">
                    <strong>Tổng cộng: {tongHopDong.toLocaleString()} đ</strong>
                </div>

                <div className="flex gap-3 justify-center mt-5 mb-10">
                    <button
                        onClick={addRow}
                        className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                    >
                        Thêm dòng
                    </button>

                    <button
                        onClick={() => {
                            if (templateData && validateRows()) {
                                exportToWord(templateData, {
                                    ...formData,
                                    rows,
                                    tongHopDong,
                                });
                            }
                        }}
                        className="flex items-center gap-1 px-4 py-2 bg-amber-600 text-white rounded cursor-pointer"
                    >
                        <FaRegFileWord /> Xuất file
                    </button>

                    {mode === "update" && (
                        <button
                            onClick={handleUpdateHistory}
                            className="flex items-center gap-1 px-4 py-2 bg-pink-800 text-white rounded cursor-pointer"
                        >
                            <RxUpdate /> Cập nhật bản ghi
                        </button>
                    )}

                    <button
                        onClick={() => setIsOpenModal(true)}
                        className="flex items-center gap-1 px-4 py-2 bg-green-800 text-white rounded cursor-pointer"
                    >
                        <FaHistory /> Tạo lịch sử mới
                    </button>
                </div>
            </div>

            <CreateHistoryModal
                nameHistory={nameHistory}
                setNameHistory={setNameHistory}
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                handleCreateHistory={handleCreateHistory}
            />
        </>
    );
};

export default BaseDetailForm;
