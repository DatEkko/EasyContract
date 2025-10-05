import { Table, TableRow, TableCell, Paragraph, TextRun, AlignmentType, WidthType } from "docx";

export const makeHeader = (
    companyName: string,
    soHopDong: string,
) =>
    new Table({
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
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 42, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({ text: companyName.toUpperCase(), bold: true }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                spacing: { before: 0, after: 50 },
                                children: [
                                    new TextRun({ text: "———" }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: `Số: ${soHopDong}` })],
                            }),
                        ],
                    }),

                    new TableCell({
                        width: { size: 58, type: WidthType.PERCENTAGE },
                        margins: {
                            left: 420,
                        },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Độc lập - Tự do - Hạnh phúc",
                                        bold: true,
                                    }),
                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯" })],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: `TP. Hồ Chí Minh, ngày … tháng … năm 20……` })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });

export const makeTitle = (spacingBefore: number, title: string): Paragraph => {
    return new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: spacingBefore ?? 0 },
        children: [
            new TextRun({
                text: title ?? "",
                bold: true,
                size: 36,
            }),
        ],
    });
};
