import { Document, Packer } from "docx";
import { saveAs } from "file-saver";
import { parseTemplate } from "@/utils/parseTemplate";
import { PartyInfo, RowData } from "@/components/DetailTemplate/types";

export const exportToWord = async (
    data: ITemplateStructure,
    rows: RowData[],
    tongHopDong: number,
    benA: PartyInfo,
    benB: PartyInfo
) => {

    const children = parseTemplate(data.blocks, rows, tongHopDong, benA, benB);

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
    saveAs(blob, `${data.templateId}.docx`);
};
