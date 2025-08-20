import { RowData } from "./useDetailLogic";

interface Props {
    rows: RowData[];
    errors: Record<string, string>;
    handleChange: (id: string, field: keyof RowData, value: string) => void;
    deleteRow: (id: string) => void;
}

const TableRows = ({ rows, errors, handleChange, deleteRow }: Props) => {
    return (
        <>
            {rows.map((row) => {
                const tongSoTien = (Number(row.soLuong) || 0) * (Number(row.soTien) || 0);

                return (
                    <tr key={row.id}>
                        <td className="border p-2">
                            <input
                                value={row.ten}
                                onChange={(e) => handleChange(row.id, "ten", e.target.value)}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                value={row.soLuong}
                                onChange={(e) => handleChange(row.id, "soLuong", e.target.value)}
                                className="w-full p-1 border rounded text-right"
                            />
                            {errors[`${row.id}-soLuong`] && (
                                <p className="text-red-500 text-sm">{errors[`${row.id}-soLuong`]}</p>
                            )}
                        </td>
                        <td className="border p-2">
                            <input
                                value={row.donViTinh}
                                onChange={(e) => handleChange(row.id, "donViTinh", e.target.value)}
                                className="w-full p-1 border rounded"
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                value={row.soTien === "" ? "" : Number(row.soTien).toLocaleString("en-US")}
                                onChange={(e) => handleChange(row.id, "soTien", e.target.value)}
                                className="w-full p-1 border rounded text-right"
                            />
                            {errors[`${row.id}-soTien`] && (
                                <p className="text-red-500 text-sm">{errors[`${row.id}-soTien`]}</p>
                            )}
                        </td>
                        <td className="border p-2 text-right">{tongSoTien.toLocaleString()} đ</td>
                        <td className="border p-2 text-center">
                            <button
                                onClick={() => deleteRow(row.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded"
                            >
                                Xóa
                            </button>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default TableRows;
