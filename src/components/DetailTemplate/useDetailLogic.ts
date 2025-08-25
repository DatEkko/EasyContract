import { useState } from "react";
import { RowData } from "./types";

export const useDetailLogic = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [rows, setRows] = useState<RowData[]>([
        { id: crypto.randomUUID(), ten: "", soLuong: "", donViTinh: "", soTien: "", ghiChu: "" },
    ]);

    const updateRow = (id: string, field: keyof RowData, value: string | number | "") => {
        setRows((prev) => prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
    };

    const handleChange = (id: string, field: keyof RowData, value: string) => {
        let errorMessage = "";

        if (field === "soLuong" || field === "soTien") {
            if (value === "") {
                updateRow(id, field, "");
            } else if (!/^\d+$/.test(value.replace(/,/g, ""))) {
                errorMessage = "Vui lòng nhập số!";
            } else {
                updateRow(id, field, Number(value.replace(/,/g, "")));
            }
        } else {
            updateRow(id, field, value);
        }

        setErrors((prev) => ({ ...prev, [`${id}-${field}`]: errorMessage }));
    };

    const addRow = () => {
        setRows([
            ...rows,
            { id: crypto.randomUUID(), ten: "", soLuong: "", donViTinh: "", soTien: "", ghiChu: "" },
        ]);
    };

    const deleteRow = (id: string) => {
        if (rows.length === 1) {
            setRows([
                { id: crypto.randomUUID(), ten: "", soLuong: "", donViTinh: "", soTien: "", ghiChu: "" },
            ]);
        } else {
            setRows(rows.filter((row) => row.id !== id));
        }
    };

    const tongHopDong = rows.reduce(
        (sum, r) => sum + (Number(r.soLuong) || 0) * (Number(r.soTien) || 0),
        0
    );

    // ✅ validate toàn bộ các dòng
    const validateRows = () => {
        const newErrors: Record<string, string> = {};

        rows.forEach((row) => {
            if (!row.ten.trim()) newErrors[`${row.id}-ten`] = "Tên sản phẩm bắt buộc";
            if (!row.soLuong || Number(row.soLuong) <= 0) newErrors[`${row.id}-soLuong`] = "Số lượng bắt buộc";
            if (!row.donViTinh) newErrors[`${row.id}-donViTinh`] = "Vui lòng chọn đơn vị tính";
            if (!row.soTien || Number(row.soTien) <= 0) newErrors[`${row.id}-soTien`] = "Đơn giá bắt buộc";
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { rows, errors, handleChange, addRow, deleteRow, tongHopDong, validateRows };
};
