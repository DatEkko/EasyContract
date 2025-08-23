"use client";
import { PartyInfo } from "@/components/DetailTemplate/types";
import companies from "@/data/ListCompany.json";

interface PartyInfoFormProps {
    label: string;
    value: PartyInfo;
    onChange: (info: PartyInfo) => void;
}

const PartyInfoForm = ({ label, value, onChange }: PartyInfoFormProps) => {
    const handleChange = (field: keyof PartyInfo, val: string) => {
        onChange({ ...value, [field]: val });
    };

    const handleSelectCompany = (companyName: string) => {
        const selected = companies.find((c) => c.tenCongTy === companyName);
        if (selected) {
            onChange(selected);
        }
    };

    return (
        <div className="border-4 rounded-lg p-5 shadow mb-6 text-left w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{label}</h2>
            </div>
            <div>
                <select
                    className="border p-2 rounded text-black bg-amber-50"
                    onChange={(e) => handleSelectCompany(e.target.value)}
                    defaultValue=""
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
            </div>

            <div className="flex flex-col">
                <div>
                    <label className="block mb-1 font-medium">Tên công ty</label>
                    <input
                        value={value.tenCongTy}
                        onChange={(e) => handleChange("tenCongTy", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Người đại diện</label>
                    <input
                        value={value.daiDien}
                        onChange={(e) => handleChange("daiDien", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Chức vụ</label>
                    <input
                        value={value.chucVu}
                        onChange={(e) => handleChange("chucVu", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Mã ngân hàng</label>
                    <input
                        value={value.maNganHang}
                        onChange={(e) => handleChange("maNganHang", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Mã số thuế</label>
                    <input
                        value={value.maSoThue}
                        onChange={(e) => handleChange("maSoThue", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mb-1 font-medium">Địa chỉ</label>
                    <input
                        value={value.diaChi}
                        onChange={(e) => handleChange("diaChi", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mb-1 font-medium">Số điện thoại</label>
                    <input
                        value={value.SDT}
                        onChange={(e) => handleChange("SDT", e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default PartyInfoForm;
