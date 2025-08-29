"use client";
import { use, useState } from "react";
import ListTemplate from "@/data/ListTemplate.json";
import PrivateTemplate from "@/data/PrivateTemplate.json"
import TableRows from "@/components/DetailTemplate/TableRows";
import { useDetailLogic } from "@/components/DetailTemplate/useDetailLogic";
import { exportToWord } from "@/utils/exportWord";
import PartyInfoForm from "@/components/DetailTemplate/PartyInfoForm";
import { emptyPartyInfo, PartyInfo } from "@/components/DetailTemplate/types";
import { FaRegFileWord } from "react-icons/fa";
import TableRowsMobile from "@/components/DetailTemplate/TableRowsMobile";

interface DetailPageProps {
    params: Promise<{ template: string }>;
}

const DetailTemplate = ({ params }: DetailPageProps) => {
    const { template } = use(params);
    const currentTemplate = ListTemplate.find((item) => item.id === template) || PrivateTemplate.find((item) => item.id === template);
    const [benA, setBenA] = useState<PartyInfo>(emptyPartyInfo);
    const [benB, setBenB] = useState<PartyInfo>(emptyPartyInfo);

    const { rows, errors, handleChange, addRow, deleteRow, tongHopDong, validateRows } = useDetailLogic();

    if (!currentTemplate) {
        return <div>Không tìm thấy hợp đồng với id: {template}</div>;
    }

    return (
        <div className="text-center px-5 md:px-10 text-[#20253d]">
            <div className="text-3xl md:text-5xl my-10 font-bold">Soạn thảo <span className="block md:inline">{currentTemplate.name.toUpperCase()}</span></div>

            <div className="flex flex-col lg:flex-row justify-center gap-3 lg:gap-10">
                <PartyInfoForm label="Bên A - Sử Dụng Dịch Vụ" value={benA} onChange={setBenA} />
                <PartyInfoForm label="Bên B - Cung Cấp Dịch Vụ" value={benB} onChange={setBenB} />
            </div>
            <div className="text-center font-bold my-5 text-2xl">Thông tin hàng hóa, dịch vụ</div>
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full border border-collapse text-lg">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="border p-2">Tên</th>
                            <th className="border p-2">Số lượng</th>
                            <th className="border p-2">Đơn vị tính</th>
                            <th className="border p-2">Số tiền</th>
                            <th className="border p-2">Tổng số tiền</th>
                            <th className="border p-2">Ghi chú</th>
                            <th className="border p-2">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows
                            rows={rows}
                            errors={errors}
                            handleChange={handleChange}
                            deleteRow={deleteRow}
                        />
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <TableRowsMobile
                    rows={rows}
                    errors={errors}
                    handleChange={handleChange}
                    deleteRow={deleteRow}
                />
            </div>

            <div className="mt-4 text-center md:text-right text-xl md:text-2xl">
                <strong>Tổng cộng: {tongHopDong.toLocaleString()} đ</strong>
            </div>

            <div className="flex gap-3 justify-center mt-5 mb-10">
                <button onClick={addRow} className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">
                    Thêm dòng
                </button>
                <button
                    onClick={() => {
                        if (validateRows()) {
                            exportToWord(currentTemplate.id, rows, tongHopDong, benA, benB);
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

export default DetailTemplate;
