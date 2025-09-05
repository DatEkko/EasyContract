import { PartyInfo } from "@/components/DetailTemplate/types";
import { Table, TableRow, TableCell, Paragraph, TextRun, AlignmentType, WidthType } from "docx";

export const makeSignTable = (benA: PartyInfo, benB: PartyInfo) => {
    return new Table({
        width: { size: 95, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
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
                    // Cột bên A
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "ĐẠI DIỆN BÊN A", bold: true })],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: benA.chucVu, bold: true })],
                            }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: benA.daiDien, bold: true })],
                            }),
                        ],
                    }),

                    // Cột bên B
                    new TableCell({
                        width: { size: 50, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: "ĐẠI DIỆN BÊN B", bold: true })],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: benB.chucVu, bold: true })],
                            }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({ text: "" }),
                            new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({ text: benB.daiDien, bold: true })],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
