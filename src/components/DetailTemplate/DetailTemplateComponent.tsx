"use client";
import { useState } from "react";
import { FaRegFileWord } from "react-icons/fa";
import { useDetailLogic } from "@/components/DetailTemplate/useDetailLogic";
import { exportToWord } from "@/utils/exportWord";
import { collectFields } from "@/blocks/engine";
import DynamicForm from "@/components/DetailTemplate/DynamicForm";
import { IDataFields } from "@/blocks/type.block";

interface TemplateProps {
    data?: ITemplateStructure;
}

const DetailTemplateComponent = ({ data }: TemplateProps) => {
    const { rows, errors, handleChange, addRow, deleteRow, tongHopDong, validateRows } = useDetailLogic();
    const allFields = collectFields(data?.blocks ?? []);
    const [formData, setFormData] = useState<IDataFields>({
        beneficiaryKey: "partyA",
    });
    return (
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
                    className="flex items-center gap-1 px-4 py-2 bg-green-800 text-white rounded cursor-pointer"
                >
                    Xuất file Word <FaRegFileWord />
                </button>
            </div>
        </div>
    );
};

export default DetailTemplateComponent;
