export interface PartyInfo {
    tenCongTy: string;
    daiDien: string;
    chucVu: string;
    maNganHang: string;
    maSoThue: string;
    diaChi: string;
}

export const emptyPartyInfo: PartyInfo = {
    tenCongTy: "",
    daiDien: "",
    chucVu: "",
    maNganHang: "",
    maSoThue: "",
    diaChi: "",
};

export interface RowData {
    id: string;
    ten: string;
    soLuong: number | "";
    donViTinh: string;
    soTien: number | "";
    ghiChu: string;
}
