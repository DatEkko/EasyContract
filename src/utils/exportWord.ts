import { Document, Packer } from "docx";
import { saveAs } from "file-saver";
import { parseTemplate } from "@/utils/parseTemplate";
import { PartyInfo, RowData, Template } from "@/components/DetailTemplate/types";
import templatesJson from "@/data/ListTemplateContent.json";

export const exportToWord = async (
    templateId: string,
    rows: RowData[],
    tongHopDong: number,
    benA: PartyInfo,
    benB: PartyInfo
) => {
    const templates: Template[] = templatesJson as Template[];
    const template = templates.find((t) => t.id === templateId);

    if (!template) {
        alert(`Template chưa hỗ trợ: ${templateId}`);
        return;
    }

    const children = parseTemplate(template, rows, tongHopDong, benA, benB);

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
