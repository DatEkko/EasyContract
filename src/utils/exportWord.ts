
import { PartyInfo } from "@/components/DetailTemplate/types";
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType, AlignmentType } from "docx";
import { saveAs } from "file-saver";

interface RowData {
    id: string;
    ten: string;
    soLuong: number | "";
    donViTinh: string;
    soTien: number | "";
}

const makeRows = (rows: RowData[]) => [
    new TableRow({
        children: [
            new TableCell({ children: [new Paragraph("Tên")] }),
            new TableCell({ children: [new Paragraph("Số lượng")] }),
            new TableCell({ children: [new Paragraph("Đơn vị tính")] }),
            new TableCell({ children: [new Paragraph("Số tiền")] }),
            new TableCell({ children: [new Paragraph("Tổng số tiền")] }),
        ],
    }),
    ...rows.map(r =>
        new TableRow({
            children: [
                new TableCell({ children: [new Paragraph(r.ten || "")] }),
                new TableCell({ children: [new Paragraph(String(r.soLuong || ""))] }),
                new TableCell({ children: [new Paragraph(r.donViTinh || "")] }),
                new TableCell({ children: [new Paragraph(r.soTien ? r.soTien.toLocaleString() : "")] }),
                new TableCell({
                    children: [
                        new Paragraph(((Number(r.soLuong) || 0) * (Number(r.soTien) || 0)).toLocaleString()),
                    ],
                }),
            ],
        })
    ),
];

const makePartyInfo = (title: string, info: PartyInfo) => {
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({ children: [new TextRun({ text: title, bold: true })] })],
                        columnSpan: 2,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Tên công ty")] }),
                    new TableCell({ children: [new Paragraph(info.tenCongTy)] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Đại diện")] }),
                    new TableCell({ children: [new Paragraph(info.daiDien)] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Chức vụ")] }),
                    new TableCell({ children: [new Paragraph(info.chucVu)] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Mã số thuế")] }),
                    new TableCell({ children: [new Paragraph(info.maSoThue)] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Mã ngân hàng")] }),
                    new TableCell({ children: [new Paragraph(info.maNganHang)] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Địa chỉ")] }),
                    new TableCell({ children: [new Paragraph(info.diaChi)] }),
                ],
            }),
        ],
    });
};


export const exportToWord = async (
    templateId: string,
    rows: RowData[],
    tongHopDong: number,
    benA: PartyInfo,
    benB: PartyInfo
) => {
    let children: (Paragraph | Table)[] = [];

    switch (templateId) {
        case "hd1":
            children = [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "HỢP ĐỒNG MUA BÁN", bold: true, size: 40 })],
                }),
                new Paragraph({ text: `ID: ${templateId}` }),

                makePartyInfo("Bên A", benA),
                new Paragraph({ text: "" }), // dòng trống
                makePartyInfo("Bên B", benB),
                new Paragraph({ text: "" }),

                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: makeRows(rows),
                }),
                new Paragraph({
                    children: [new TextRun({ text: `\nTổng cộng: ${tongHopDong.toLocaleString()} đ`, bold: true })],
                }),
            ];
            break;

        case "hd2":
            children = [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({ text: "ĐỀ NGHỊ THANH TOÁN", bold: true, size: 40 })],
                }),

                makePartyInfo("Bên A", benA),
                new Paragraph({ text: "" }), // dòng trống
                makePartyInfo("Bên B", benB),
                new Paragraph({ text: "" }),

                new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: makeRows(rows),
                }),
                new Paragraph({
                    children: [new TextRun({ text: `\nTổng số tiền đề nghị: ${tongHopDong.toLocaleString()} đ`, bold: true })],
                }),
            ];
            break;

        default:
            children = [
                new Paragraph({ text: `Template chưa hỗ trợ: ${templateId}` }),
            ];
    }

    const doc = new Document({
        sections: [{ children }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${templateId}.docx`);
};
