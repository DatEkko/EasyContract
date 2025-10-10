import { parseTemplate } from "@/blocks/engine";
import { IDataFields } from "@/blocks/type.block";
import { ITemplateStructure } from "@/services/type.service";
import { Document, Packer } from "docx";
import { saveAs } from "file-saver";

export const exportToWord = async (template: ITemplateStructure, data: IDataFields) => {
    const children = parseTemplate(template.blocks, data);

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
