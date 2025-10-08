"use client";
import { PartyInfo } from "@/blocks/type.block";
import { useState } from "react";

interface PartnerDropdownProps {
    listPartner: PartyInfo[];
    selectedCompany: string;
    onSelect: (partner: PartyInfo) => void;
    onDelete: (id: string) => void;
}

const PartnerDropdown = ({
    listPartner,
    selectedCompany,
    onSelect,
    onDelete,
}: PartnerDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative mb-4">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="outline-none p-2 rounded text-white bg-econtract w-full flex justify-between items-center"
            >
                <span>{selectedCompany || "Chọn nhanh công ty"}</span>
                <svg
                    className="w-4 h-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <ul className="absolute mt-1 w-full max-h-60 overflow-auto rounded-lg border-2 bg-white shadow-lg z-50">
                    {listPartner.map((c) => (
                        <li
                            onClick={() => {
                                onSelect(c);
                                setIsOpen(false);
                            }}
                            key={c._id}
                            className="flex justify-between items-center px-3 py-2 hover:bg-gray-300 cursor-pointer"
                        >
                            <span>
                                {c.name}
                            </span>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(c._id ?? "");
                                }}
                                className="text-red-500 hover:text-red-600 hover:font-bold cursor-pointer text-sm"
                            >
                                Xóa
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PartnerDropdown;
