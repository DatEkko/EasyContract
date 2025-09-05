import { AlignmentType } from "docx";

export interface PartyInfo {
    tenCongTy: string;
    daiDien: string;
    chucVu: string;
    soTaiKhoan: string;
    tenNganHang: string;
    maSoThue: string;
    diaChi: string;
    SDT: string;
}

export const emptyPartyInfo: PartyInfo = {
    tenCongTy: "",
    daiDien: "",
    chucVu: "",
    soTaiKhoan: "",
    tenNganHang: "",
    maSoThue: "",
    diaChi: "",
    SDT: "",
};

export interface RowData {
    id: string;
    ten: string;
    soLuong: number | "";
    donViTinh: string;
    soTien: number | "";
    ghiChu: string;
}

export interface Template {
    id: string;
    name: string;
    blocks: TemplateBlock[];
}

export type TemplateBlock =
    | HeaderBlock
    | TitleBlock
    | PartyBlock
    | GenericBlock
    | SignTableBlock;

export interface HeaderBlock {
    type: "header";
    title: string;
    code: string;
    location: string;
    date: string;
}

// Title block
export interface TitleBlock {
    type: "title";
    text: string;
    size?: number;
    bold?: boolean;
    align?: keyof typeof AlignmentType;
    spacingBefore?: number;
}

// Party block
export interface PartyBlock {
    type: "party";
    role: "A" | "B";
}

// Generic block (ví dụ policy)
export interface GenericBlock {
    type: "block";
    name:
    | "makeTopPolicy"
    | "makeGeneralPolicy12"
    | "makeGeneralPolicy3NoDeposit"
    | "makeGeneralPolicy3WithDeposit"
    | "makeGeneralPolicy456";
}

// Sign table block
export interface SignTableBlock {
    type: "signTable";
}
