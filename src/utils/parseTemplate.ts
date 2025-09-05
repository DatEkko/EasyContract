import { Paragraph, Table, TextRun, AlignmentType } from "docx";
import { makeHeader } from "@/makeBlock/makeHeader";
import { makePartyInfo } from "@/makeBlock/makePartyInfo";
import { makeSignTable } from "@/makeBlock/makeSignTable";
import {
    makeGeneralPolicy12,
    makeGeneralPolicy3NoDeposit,
    makeGeneralPolicy3WithDeposit,
    makeGeneralPolicy456,
    makeTopPolicy
} from "@/makeBlock/makeGeneralPolicy";
import { PartyInfo, RowData, Template, TemplateBlock } from "@/components/DetailTemplate/types";

export function parseTemplate(
    template: Template,
    rows: RowData[],
    tongHopDong: number,
    benA: PartyInfo,
    benB: PartyInfo
): (Paragraph | Table)[] {
    if (!template.blocks) return [];

    return template.blocks.flatMap((block: TemplateBlock) => {
        switch (block.type) {
            case "header":
                return [makeHeader(block.title, block.code, block.location, block.date), new Paragraph({ text: "" })];

            case "title":
                return [
                    new Paragraph({
                        alignment:
                            AlignmentType[block.align?.toUpperCase() as keyof typeof AlignmentType] ||
                            AlignmentType.LEFT,
                        spacing: { before: block.spacingBefore ?? 0 },
                        children: [
                            new TextRun({ text: block.text, bold: block.bold, size: block.size }),
                        ],
                    }),
                ];

            case "party":
                return [makePartyInfo(`Bên ${block.role}`, block.role === "A" ? benA : benB), new Paragraph({ text: "" }),];

            case "block":
                if (block.name === "makeTopPolicy") return makeTopPolicy();
                if (block.name === "makeGeneralPolicy12") return makeGeneralPolicy12(rows, tongHopDong);
                if (block.name === "makeGeneralPolicy3NoDeposit")
                    return makeGeneralPolicy3NoDeposit(tongHopDong, benB);
                if (block.name === "makeGeneralPolicy3WithDeposit")
                    return makeGeneralPolicy3WithDeposit(tongHopDong, benB);

                if (block.name === "makeGeneralPolicy456") return makeGeneralPolicy456();
                return [];

            case "signTable":
                return [new Paragraph({ text: "" }), makeSignTable(benA, benB)];

            default:
                return [new Paragraph({ text: `Block chưa hỗ trợ: ${(block as TemplateBlock).type}` })];

        }
    });
}

