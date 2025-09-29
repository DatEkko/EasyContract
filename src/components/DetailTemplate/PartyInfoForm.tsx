"use client";
import { useState } from "react";
import { PartyInfo } from "@/components/DetailTemplate/types";
import companies from "@/data/ListCompany.json";

interface PartyInfoFormProps {
    label: string;
    value: PartyInfo;
    onChange: (info: PartyInfo) => void;
}

const fields: { key: keyof PartyInfo; label: string }[] = [
    { key: "tenCongTy", label: "Tên công ty" },
    { key: "daiDien", label: "Người đại diện" },
    { key: "chucVu", label: "Chức vụ" },
    { key: "soTaiKhoan", label: "Số tài khoản" },
    { key: "tenNganHang", label: "Tên ngân hàng / Chi nhánh" },
    { key: "maSoThue", label: "Mã số thuế" },
    { key: "diaChi", label: "Địa chỉ" },
    { key: "SDT", label: "Số điện thoại" },
];

const PartyInfoForm = ({ label, value, onChange }: PartyInfoFormProps) => {
    const [selectedCompany, setSelectedCompany] = useState<string>("");

    const handleChange = (field: keyof PartyInfo, val: string) => {
        onChange({ ...value, [field]: val });
    };

    const handleSelectCompany = (companyName: string) => {
        setSelectedCompany(companyName);
        const selected = companies.find((c) => c.tenCongTy === companyName);
        if (selected) onChange(selected);
    };

    return (
        <div className="border-4 rounded-lg p-5 shadow mb-6 text-left w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold">{label}</h2>
            </div>

            {/* Select nhanh công ty */}
            <select
                className="outline-none p-2 rounded text-white bg-econtract mb-4 w-full"
                value={selectedCompany}
                onChange={(e) => handleSelectCompany(e.target.value)}
            >
                <option value="" disabled>
                    Chọn nhanh công ty
                </option>
                {companies.map((c, i) => (
                    <option key={i} value={c.tenCongTy}>
                        {c.tenCongTy}
                    </option>
                ))}
            </select>

            {/* Các input field */}
            <div className="flex flex-col">
                {fields.map(({ key, label }) => (
                    <div key={key}>
                        <label className="block mb-1 mt-2 font-bold text-dim-gray">{label}</label>
                        <input
                            value={value[key] || ""}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className="w-full border-b-2 p-1 outline-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PartyInfoForm;
