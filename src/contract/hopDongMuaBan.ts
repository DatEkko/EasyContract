import { Paragraph, Table, TextRun, AlignmentType, WidthType } from "docx";
import { PartyInfo, RowData } from "@/components/DetailTemplate/types";
import { makeHeader } from "@/utils/makeHeader";
import { makePartyInfo } from "@/utils/makePartyInfo";
import { makeRows } from "@/utils/makeRows";

export const hopDongMuaBan = (
    rows: RowData[],
    tongHopDong: number,
    benA: PartyInfo,
    benB: PartyInfo
) => [
        makeHeader(
            "CÔNG TY TNHH HOA KIỂNG VÀ CHĂM SÓC CẢNH QUAN CHÂU SA ĐÉC",
            "…/HĐMB/2024/CSD",
            "TP. Hồ Chí Minh",
            "ngày … tháng … năm 2025"
        ),
        new Paragraph({ text: "" }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 100, after: 0 },
            children: [new TextRun({ text: "HỢP ĐỒNG MUA BÁN CÂY XANH", bold: true, size: 36 })],
        }),

        new Paragraph({ text: "" }),
        new Paragraph({
            spacing: { line: 360 },
            indent: { left: 220 },
            children: [new TextRun({ text: "-      Căn cứ Bộ luật Dân sự năm 2015;", italics: true })],
        }),
        new Paragraph({
            spacing: { line: 360 },
            indent: { left: 220 },
            children: [new TextRun({ text: "-      Căn cứ Luật Thương mại năm 2005;", italics: true })],
        }),
        new Paragraph({
            spacing: { line: 360 },
            indent: { left: 220 },
            children: [new TextRun({ text: "-      Căn cứ nhu cầu và khả năng của hai bên.", italics: true })],
        }),
        new Paragraph({ text: "" }),

        makePartyInfo("Bên A", benA),
        new Paragraph({ text: "" }),
        makePartyInfo("Bên B", benB),
        new Paragraph({ text: "" }),

        new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: makeRows(rows, tongHopDong),
        }),
    ];
