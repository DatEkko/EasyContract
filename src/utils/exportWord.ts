import { blocksRegistry } from "@/blocks/blocksRegistry";
import { parseTemplate } from "@/blocks/engine";
import { Document, Packer } from "docx";
import { saveAs } from "file-saver";

export const exportToWord = async (template: ITemplateStructure, data: any) => {
    const children = parseTemplate(template.blocks, data, blocksRegistry);

    const doc = new Document({
        styles: {
            default: {
                document: {
                    run: { font: "Times New Roman", size: 26 },
                },
            },
        },
        sections: [
            {
                properties: {
                    page: {
                        margin: { top: 568, bottom: 576, left: 850, right: 562 },
                    },
                },
                children,
            },
        ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${template.templateId}.docx`);
};
