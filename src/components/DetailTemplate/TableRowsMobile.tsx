import { RowData } from "@/blocks/type.block";
import units from "@/data/Unit.json";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
    rows: RowData[];
    errors: Record<string, string>;
    handleChange: (id: string, field: keyof RowData, value: string) => void;
    deleteRow: (id: string) => void;
}

const TableRowsMobile = ({ rows, errors, handleChange, deleteRow }: Props) => {
    return (
        <div className="space-y-4">
            {rows.map((row) => {
                const tongSoTien =
                    (Number(row.soLuong) || 0) * (Number(row.soTien) || 0);

                return (
                    <div key={row.id} className="border rounded-lg p-3 shadow">
                        {/* Tên */}
                        <div className="flex items-center gap-5">
                            <label className="block font-semibold min-w-20 w-20 text-left">Tên</label>
                            <input
                                value={row.ten}
                                onChange={(e) => handleChange(row.id, "ten", e.target.value)}
                                className="w-full p-1 border rounded outline-none"
                                placeholder="Nhập tên sản phẩm"
                            />
                            {errors[`${row.id}-ten`] && (
                                <p className="text-red-500 text-sm">{errors[`${row.id}-ten`]}</p>
                            )}
                        </div>

                        {/* Số lượng */}
                        <div className="flex items-center gap-5 mt-5">
                            <label className="block font-semibold whitespace-nowrap min-w-20 w-20 text-left">Số lượng</label>
                            <input
                                value={row.soLuong}
                                onChange={(e) => handleChange(row.id, "soLuong", e.target.value)}
                                className="w-full p-1 border rounded outline-none"
                            />
                        </div>


                        {/* Đơn vị tính */}
                        <div className="flex items-center gap-5 mt-5">
                            <label className="block font-semibold whitespace-nowrap min-w-20 w-20 text-left">Đơn vị tính</label>
                            <select
                                value={row.donViTinh}
                                onChange={(e) => handleChange(row.id, "donViTinh", e.target.value)}
                                className="w-full p-1 border rounded outline-none"
                            >
                                <option value="" disabled>
                                    Chọn
                                </option>
                                {units.map((u) => (
                                    <option key={u} value={u}>
                                        {u}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Số tiền */}
                        <div className="flex items-center gap-5 mt-5">
                            <label className="block font-semibold whitespace-nowrap min-w-20 w-20 text-left">Số tiền</label>
                            <input
                                value={row.soTien === "" ? "" : Number(row.soTien).toLocaleString("en-US")}
                                onChange={(e) => handleChange(row.id, "soTien", e.target.value)}
                                className="w-full p-1 border rounded outline-none"
                            />
                        </div>

                        {/* Ghi chú */}
                        <div className="flex items-center gap-5 mt-5">
                            <label className="block font-semibold whitespace-nowrap min-w-20 w-20 text-left">Ghi chú</label>
                            <input
                                value={row.ghiChu}
                                onChange={(e) => handleChange(row.id, "ghiChu", e.target.value)}
                                className="w-full p-1 border rounded outline-none"
                            />
                        </div>

                        {/* Tổng số tiền */}
                        <p className="mt-5">
                            <span className="font-semibold">Tổng số tiền:</span>{" "}
                            {tongSoTien.toLocaleString()} đ
                        </p>

                        {/* Xóa */}
                        <button
                            onClick={() => deleteRow(row.id)}
                            className="mt-3 ml-auto px-3 py-2 bg-red-500 text-white rounded flex items-center gap-2 cursor-pointer"
                        >
                            <FaRegTrashAlt />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TableRowsMobile;
