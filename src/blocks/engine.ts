import { Paragraph, Table } from "docx";
import { BlockDefinition, Field, IDataFields, TemplateBlock } from "./type.block";
import { isGenericBlock, isMatchingDef } from "@/library/typeGuard";
import { blocksRegistry } from "./blocksRegistry";

export const collectFields = (template: TemplateBlock[]): Field[] => {
    const allFields = template.flatMap(block => {
        const def = blocksRegistry.find(d => isMatchingDef(d, block));
        return def?.fields ?? [];
    });

    // Lọc trùng key (Map để O(n))
    return Array.from(new Map(allFields.map(f => [f.key, f])).values());
};

export const parseTemplate = (
    blocks: TemplateBlock[],
    data: IDataFields,
): (Paragraph | Table)[] =>
    blocks.flatMap((block) => {
        for (const def of blocksRegistry) {
            if (isMatchingDef(def, block)) {
                return (def as BlockDefinition<typeof block>).render(block, data);
            }
        }
        return [
            new Paragraph({
                text: `Block chưa hỗ trợ: ${block.type} ${isGenericBlock(block) ? block.name : ""}`,
            }),
        ];
    });


