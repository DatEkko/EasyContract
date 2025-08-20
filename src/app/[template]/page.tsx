"use client";
import { use } from "react";
import ListTemplate from "@/data/ListTemplate.json";
import TableRows from "@/components/DetailTemplate/TableRows";
import { useDetailLogic } from "@/components/DetailTemplate/useDetailLogic";
import { exportToWord } from "@/utils/exportWord";

interface DetailPageProps {
    params: Promise<{ template: string }>;
}

const DetailTemplate = ({ params }: DetailPageProps) => {
    const { template } = use(params);
    const currentTemplate = ListTemplate.find((item) => item.id === template);

    const { rows, errors, handleChange, addRow, deleteRow, tongHopDong } = useDetailLogic();

    if (!currentTemplate) {
        return <div>Không tìm thấy hợp đồng với id: {template}</div>;
    }

    return (
        <div className="text-center px-10">
            <div className="text-5xl mt-10">Soạn thảo {currentTemplate.name}</div>
            <p className="mb-10">ID: {currentTemplate.id}</p>

            <table className="w-full border border-collapse text-lg">
                <thead>
                    <tr className="bg-gray-200 text-black">
                        <th className="border p-2">Tên</th>
                        <th className="border p-2">Số lượng</th>
                        <th className="border p-2">Đơn vị tính</th>
                        <th className="border p-2">Số tiền</th>
                        <th className="border p-2">Tổng số tiền</th>
                        <th className="border p-2">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRows rows={rows} errors={errors} handleChange={handleChange} deleteRow={deleteRow} />
                </tbody>
            </table>

            <div className="mt-4 text-right text-2xl">
                <strong>Tổng cộng: {tongHopDong.toLocaleString()} đ</strong>
            </div>

            <div className="flex gap-3 justify-center mt-5">
                <button onClick={addRow} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Thêm dòng
                </button>
                <button
                    onClick={() => exportToWord(currentTemplate.id, rows, tongHopDong)}
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Xuất file Word
                </button>
            </div>
        </div>
    );
};

export default DetailTemplate;
