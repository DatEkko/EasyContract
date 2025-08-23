
import { PartyInfo, RowData } from "@/components/DetailTemplate/types";
import { Document, Packer, Paragraph, Table } from "docx";
import { saveAs } from "file-saver";
import { hopDongMuaBan } from "@/contract/hopDongMuaBan";
import { bangBaoGia } from "@/contract/bangBaoGia";

export const exportToWord = async (
    templateId: string,
    rows: RowData[],
    tongHopDong: number,
    benA: PartyInfo,
    benB: PartyInfo
) => {
    let children: (Paragraph | Table)[] = [];

    switch (templateId) {
        case "hop-dong-mua-ban":
            children = hopDongMuaBan(rows, tongHopDong, benA, benB);
            break;

        case "bang-bao-gia-dich-vu":
            children = bangBaoGia(rows, tongHopDong, benA, benB);
            break;

        default:
            children = [
                new Paragraph({ text: `Template chưa hỗ trợ: ${templateId}` }),
            ];
    }

    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: {
                        font: "Times New Roman",
                        size: 26,
                    },
                },
            },
        },
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 568,
                            bottom: 576,
                            left: 850,
                            right: 562,
                        },
                    },
                },
                children,
            },
        ],
    });


    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${templateId}.docx`);
};
