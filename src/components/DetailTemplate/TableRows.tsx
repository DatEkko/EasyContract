import { RowData } from "./types";
import units from "@/data/Unit.json";
import { FaRegTrashAlt } from "react-icons/fa";

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
                                className={`w-full p-1 outline-none`}
                                placeholder="Nhập tên sản phẩm"
                            />
                            {errors[`${row.id}-ten`] && (
                                <p className="text-red-500 text-sm">{errors[`${row.id}-ten`]}</p>
                            )}
                        </td>
                        <td className="border p-2">
                            <input
                                value={row.soLuong}
                                onChange={(e) => handleChange(row.id, "soLuong", e.target.value)}
                                className="w-25 p-1 text-center outline-none"
                            />
                            {errors[`${row.id}-soLuong`] && (
                                <p className="text-red-500 text-sm">{errors[`${row.id}-soLuong`]}</p>
                            )}
                        </td>
                        <td className="border p-2">
                            <select
                                value={row.donViTinh}
                                onChange={(e) => handleChange(row.id, "donViTinh", e.target.value)}
                                className="w-25 p-1 outline-none"
                            >
                                <option value="" disabled >Chọn</option>

                                {units.map((u) => (
                                    <option key={u} value={u}>
                                        {u}
                                    </option>
                                ))}
                            </select>
                            {errors[`${row.id}-donViTinh`] && (
                                <p className="text-red-500 text-sm mt-2">{errors[`${row.id}-donViTinh`]}</p>
                            )}
                        </td>
                        <td className="border p-2">
                            <input
                                value={row.soTien === "" ? "" : Number(row.soTien).toLocaleString("en-US")}
                                onChange={(e) => handleChange(row.id, "soTien", e.target.value)}
                                className="w-40 p-1 text-right outline-none"
                            />
                            {errors[`${row.id}-soTien`] && (
                                <p className="text-red-500 text-sm">{errors[`${row.id}-soTien`]}</p>
                            )}
                        </td>
                        <td className="border p-2 text-right min-w-50">{tongSoTien.toLocaleString()} đ</td>
                        <td className="border p-2">
                            <input
                                value={row.ghiChu}
                                onChange={(e) => handleChange(row.id, "ghiChu", e.target.value)}
                                className="w-full p-1 outline-none"
                            />
                        </td>
                        <td className="border p-2 text-center">
                            <button
                                onClick={() => deleteRow(row.id)}
                                className="px-3 py-2 bg-red-500 text-white rounded cursor-pointer"
                            >
                                <FaRegTrashAlt />
                            </button>
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default TableRows;
