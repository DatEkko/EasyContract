"use client";
import { useState } from "react";
import { FaRegFileWord } from "react-icons/fa";
import { useDetailLogic } from "@/components/DetailTemplate/useDetailLogic";
import { exportToWord } from "@/utils/exportWord";
import { collectFields } from "@/blocks/engine";
import DynamicForm from "@/components/DetailTemplate/DynamicForm";
import { IDataFields } from "@/blocks/type.block";
import { FaHistory } from "react-icons/fa";
import CreateHistoryModal from "../Modal/CreateHistoryModal";
import { createHistoryService } from "@/services/historyService";
import _ from "lodash";
import { ITemplateStructure } from "@/services/type.service";

interface TemplateProps {
    data?: ITemplateStructure;
}

const DetailTemplateComponent = ({ data }: TemplateProps) => {
    const { rows, errors, handleChange, addRow, deleteRow, tongHopDong, validateRows } = useDetailLogic();
    const allFields = collectFields(data?.blocks ?? []);
    const [formData, setFormData] = useState<IDataFields>({
        beneficiaryKey: "partyA",
    });
    const [nameHistory, setNameHistory] = useState<string>("");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleCreateHistory = async () => {
        const payload = {
            name: nameHistory,
            templateId: data?._id,
            data: {
                formData: _.omit(formData, ["beneficiary"]),
                rows
            }
        }
        const res = await createHistoryService(payload);
        if (res.success) {
            alert("Tạo lịch sử thành công")
            setIsOpenModal(false);
            setNameHistory("");
        } else {
            alert(res.message);
        }
    }

    if (data?.blocks.length === 0) {
        return (
            <>
                <div className="min-h-screen text-center px-5 md:px-10 text-econtract">
                    <div className="text-3xl md:text-5xl my-10 font-bold">
                        Soạn thảo{" "}
                        <span className="block md:inline">
                            {data?.name.toLocaleUpperCase()}
                        </span>
                    </div>

                    <div>Hợp đồng hiện đang cập nhật. Vui lòng chọn hợp đồng khác</div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="text-center px-5 md:px-10 text-econtract">
                <div className="text-3xl md:text-5xl my-10 font-bold">
                    Soạn thảo{" "}
                    <span className="block md:inline">
                        {data?.name.toLocaleUpperCase()}
                    </span>
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
                            if (data && validateRows()) {
                                exportToWord(data, {
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

                    <button
                        onClick={() => {
                            setIsOpenModal(true);
                        }}
                        className="flex items-center gap-1 px-4 py-2 bg-green-800 text-white rounded cursor-pointer"
                    >
                        <FaHistory /> Tạo lịch sử
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

export default DetailTemplateComponent;
