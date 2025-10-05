import {
    Table, TableRow, TableCell, Paragraph, TextRun,
    WidthType, AlignmentType, VerticalAlign
} from "docx";
import { PartyInfo } from "../type.block";

const cellMargins = { top: 50, bottom: 50, left: 150 };

export function makeBankInfoTable(
    beneficiary: PartyInfo
) {
    return new Table({
        width: { size: 85, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "Thông tin chuyển khoản", bold: true })],
                            }),
                        ],
                        columnSpan: 2,
                        margins: cellMargins,
                        verticalAlign: VerticalAlign.CENTER,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 35, type: WidthType.PERCENTAGE },
                        margins: cellMargins,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Tên Ngân hàng", bold: true })] }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 65, type: WidthType.PERCENTAGE },
                        margins: cellMargins,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: beneficiary.tenNganHang, bold: true })],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 35, type: WidthType.PERCENTAGE },
                        margins: cellMargins,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Số tài khoản", bold: true })] }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 65, type: WidthType.PERCENTAGE },
                        margins: cellMargins,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: beneficiary.soTaiKhoan, bold: true })],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 35, type: WidthType.PERCENTAGE },
                        margins: cellMargins,
                        children: [
                            new Paragraph({ children: [new TextRun({ text: "Tên đơn vị thụ hưởng", bold: true })] }),
                        ],
                    }),
                    new TableCell({
                        width: { size: 65, type: WidthType.PERCENTAGE },
                        margins: cellMargins,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: beneficiary.tenCongTy, bold: true })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
