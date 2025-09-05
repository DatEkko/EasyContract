import { RowData } from "@/components/DetailTemplate/types";
import { TableRow, TableCell, Paragraph, AlignmentType, TextRun, WidthType, VerticalAlign } from "docx";

const cellMargin = { top: 50, bottom: 50 };

export const makeRows = (rows: RowData[], tongHopDong?: number) => {
    const total =
        tongHopDong ??
        rows.reduce((sum, r) => sum + ((Number(r.soLuong) || 0) * (Number(r.soTien) || 0)), 0);

    return [
        // Header row
        new TableRow({
            children: [
                new TableCell({
                    margins: cellMargin,
                    width: { size: 5, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "STT", bold: true, size: 20 })] })],
                }),
                new TableCell({
                    margins: cellMargin,
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Tên cây/Dịch vụ", bold: true, size: 20 })] })],
                }),
                new TableCell({
                    margins: cellMargin,
                    width: { size: 8, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Đơn vị tính", bold: true, size: 20 })] })],
                }),
                new TableCell({
                    margins: cellMargin,
                    width: { size: 10, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Số lượng", bold: true, size: 20 })] })],
                }),
                new TableCell({
                    margins: cellMargin,
                    width: { size: 12, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Đơn giá (VNĐ)", bold: true, size: 20 })] })],
                }),
                new TableCell({
                    margins: cellMargin,
                    width: { size: 12, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Thành tiền (VNĐ)", bold: true, size: 20 })] })],
                }),
                new TableCell({
                    margins: cellMargin,
                    width: { size: 23, type: WidthType.PERCENTAGE },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ghi chú", bold: true, size: 20 })] })],
                }),
            ],
        }),

        // Data rows
        ...rows.map((r, i) =>
            new TableRow({
                children: [
                    new TableCell({
                        margins: cellMargin,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(i + 1), size: 18 })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.ten || "", size: 18 })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.donViTinh || "", size: 18 })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: String(r.soLuong || ""), size: 18 })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.soTien ? r.soTien.toLocaleString() + "đ" : "", size: 18 })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: ((Number(r.soLuong) || 0) * (Number(r.soTien) || 0)).toLocaleString() + "đ", size: 18 })] })],
                    }),
                    new TableCell({
                        margins: cellMargin,
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.ghiChu || "", size: 18 })] })],
                    }),
                ],
            })
        ),

        // Tổng cộng row
        new TableRow({
            children: [
                new TableCell({
                    margins: cellMargin,
                    columnSpan: 6,
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "TỔNG GIÁ TRỊ ĐÃ BAO GỒM VAT", size: 20 })] })],
                }),
                new TableCell({
                    margins: cellMargin,
                    verticalAlign: VerticalAlign.CENTER,
                    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: total.toLocaleString() + "đ", bold: true, size: 20 })] })],
                }),
            ],
        }),
    ];
};
