import { PartyInfo } from "@/components/DetailTemplate/types";
import { Table, TableRow, TableCell, Paragraph, TextRun, WidthType } from "docx";

export const makePartyInfo = (title: string, info: PartyInfo) => {
    const cellMargin = { top: 50, bottom: 50, left: 100 };
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: {
            top: { style: "none" },
            bottom: { style: "none" },
            left: { style: "none" },
            right: { style: "none" },
            insideHorizontal: { style: "none" },
            insideVertical: { style: "none" },
        },
        rows: [
            // Hàng tiêu đề (Bên A / Bên B)
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        children: [new Paragraph({ children: [new TextRun({ text: title.toUpperCase(), bold: true })] })],
                        columnSpan: 3,
                    }),
                ],
            }),

            // Tên công ty
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "Tên công ty", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 3, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: ":", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 67, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: info.tenCongTy.toUpperCase(), bold: true })] })],
                    }),
                ],
            }),

            // Mã số thuế
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "Mã số thuế", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 3, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: ":", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 67, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: info.maSoThue, bold: true })] })],
                    }),
                ],
            }),

            // Địa chỉ
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "Địa chỉ", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 3, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: ":", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 67, type: WidthType.PERCENTAGE },
                        children: [new Paragraph(info.diaChi)],
                    }),
                ],
            }),

            // Tài khoản ngân hàng
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "Tài khoản ngân hàng", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 3, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: ":", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 67, type: WidthType.PERCENTAGE },
                        children: [new Paragraph(info.maNganHang)],
                    }),
                ],
            }),

            // Người đại diện
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "Người đại diện theo pháp luật", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 3, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: ":", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 67, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun("ÔNG/BÀ "),
                                    new TextRun({ text: info.daiDien.toLocaleUpperCase(), bold: true }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),

            // Chức vụ
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 30, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: "Chức vụ", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 3, type: WidthType.PERCENTAGE },
                        children: [new Paragraph({ children: [new TextRun({ text: ":", bold: true })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        width: { size: 67, type: WidthType.PERCENTAGE },
                        children: [new Paragraph(info.chucVu)],
                    }),
                ],
            }),

        ],
    });
};
