import { Paragraph, TextRun, AlignmentType } from "docx";
import { PartyInfo, RowData } from "@/components/DetailTemplate/types";
import { makeHeader } from "@/utils/makeHeader";
import { makePartyInfo } from "@/utils/makePartyInfo";
import { makeSignTable } from "@/utils/makeSignTable";
import { makeGeneralPolicy12, makeGeneralPolicy3WithDeposit, makeGeneralPolicy456, makeTopPolicy } from "@/utils/makeGeneralPolicy";

export const bangBaoGia = (
    rows: RowData[],
    tongHopDong: number,
    benA: PartyInfo,
    benB: PartyInfo
) => [
        makeHeader(
            "CÔNG TY TNHH HOA KIỂNG VÀ CHĂM SÓC CẢNH QUAN \n \n \n CHÂU SA ĐÉC",
            "…/HĐMB/2024/CSD",
            "TP. Hồ Chí Minh",
            "ngày … tháng … năm 2025"
        ),
        new Paragraph({ text: "" }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({ text: "BẢNG BÁO GIÁ DỊCH VỤ MUA BÁN", bold: true, size: 36 }),
            ],
        }),
        new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120 },
            children: [
                new TextRun({ text: "VÀ CHĂM SÓC CÂY XANH", bold: true, size: 36 }),
            ],
        }),

        ...makeTopPolicy(),

        makePartyInfo("Bên A", benA),
        new Paragraph({ text: "" }),
        makePartyInfo("Bên B", benB),
        new Paragraph({ text: "" }),

        ...makeGeneralPolicy12(rows, tongHopDong),

        ...makeGeneralPolicy3WithDeposit(tongHopDong),

        ...makeGeneralPolicy456(),

        new Paragraph({ text: "" }),
        makeSignTable(benA, benB),
    ];
