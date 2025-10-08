import { Paragraph, Table } from "docx";

export interface IDataFields {
    companyName?: string;
    soHopDong?: string;
    title?: string;

    // có thể mở rộng bao nhiêu party cũng được
    partyA?: PartyInfo;
    partyB?: PartyInfo;
    partyC?: PartyInfo;
    partyD?: PartyInfo;

    // Người thụ hưởng
    beneficiary?: PartyInfo;
    beneficiaryKey?: PartyKeys;

    // Danh sách rows
    rows?: RowData[];
    tongHopDong?: number;
}

export type PartyKeys = Extract<keyof IDataFields, `party${string}`>;


export type Field = {
    key: string;
    label: string;
    required?: boolean;
    group?: string; // để gom field cho Bên A / B
};

export type BlockDefinition<T extends TemplateBlock = TemplateBlock> = {
    type: T["type"];
    name?: string; // với block kiểu "block" cần phân biệt hàm
    fields: Field[];
    render: (block: T, data: IDataFields) => (Paragraph | Table)[];
    getFields?: (block: T) => Field[];
};

export type AnyBlockDefinition =
    | BlockDefinition<IHeaderBlock>
    | BlockDefinition<ITitleBlock>
    | BlockDefinition<IPartyBlock>
    | BlockDefinition<ISignTableBlock>
    | BlockDefinition<IGenericBlock>;

export interface PartyInfo {
    _id?: string;
    tenCongTy: string;
    daiDien: string;
    chucVu: string;
    soTaiKhoan: string;
    tenNganHang: string;
    maSoThue: string;
    diaChi: string;
    SDT: string;
    name?: string;
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
    | IHeaderBlock
    | ITitleBlock
    | IPartyBlock
    | IGenericBlock
    | ISignTableBlock;

export interface IHeaderBlock {
    type: "header";
    title: string;
    code: string;
}

export interface ITitleBlock {
    type: "title";
    text: string;
    spacingBefore?: number;
}

export interface IPartyBlock {
    type: "party";
    role: "A" | "B";
}

export interface ISignTableBlock {
    type: "signTable";
}

// Generic block (ví dụ policy)
export interface IGenericBlock {
    type: "block";
    name:
    | "makeTopPolicy"
    | "makeGeneralPolicy12"
    | "makeGeneralPolicy3NoDeposit"
    | "makeGeneralPolicy3WithDeposit"
    | "makeGeneralPolicy456";
}



