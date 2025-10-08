"use client";
import { useState } from "react";
import { PartyInfo } from "@/blocks/type.block";
import CreatePartnerModal from "../Modal/CreatePartnerModal";
import { createPartnerService } from "@/services/partnerService";
import PartnerDropdown from "./PartnerDropdown";

interface PartyInfoFormProps {
    label: string;
    value: PartyInfo;
    onChange: (info: PartyInfo) => void;
    listPartner: PartyInfo[];
    onDeletePartner: (id: string) => void;
    refreshPartners: () => void;
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

const PartyInfoForm = ({ label, value, onChange, listPartner, onDeletePartner, refreshPartners }: PartyInfoFormProps) => {
    const [selectedCompany, setSelectedCompany] = useState<string>("");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    const handleChange = (field: keyof PartyInfo, val: string) => {
        onChange({ ...value, [field]: val });
    };

    const handleCreatePartner = async () => {
        const payload = {
            tenCongTy: value.tenCongTy,
            daiDien: value.daiDien,
            chucVu: value.chucVu,
            diaChi: value.diaChi,
            SDT: value.SDT,
            maSoThue: value.maSoThue,
            soTaiKhoan: value.soTaiKhoan,
            tenNganHang: value.tenNganHang,
            name
        }
        const res = await createPartnerService(payload);
        if (res.success) {
            alert("Lưu thông tin thành công");
            setIsOpenModal(false);
            setName("");
            refreshPartners();
            return
        } else {
            alert(res.error);
        }
    }

    return (
        <>
            <div className="p-5 text-left w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold">{label}</h2>
                </div>

                {/* Select nhanh công ty */}
                <PartnerDropdown
                    listPartner={listPartner}
                    selectedCompany={selectedCompany ?? ""}
                    onSelect={(c) => {
                        setSelectedCompany(c.name ?? "");
                        onChange(c);
                    }}
                    onDelete={onDeletePartner}
                />

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

                <div className="mt-6 text-right">
                    <button
                        onClick={() => setIsOpenModal(true)}
                        className="font-bold border-2 rounded-4xl px-5 py-2 cursor-pointer btn-transition">Lưu thông tin</button>
                </div>
            </div>

            <CreatePartnerModal
                open={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                setName={setName}
                name={name}
                handleCreatePartner={handleCreatePartner}
            />
        </>
    );
};

export default PartyInfoForm;
