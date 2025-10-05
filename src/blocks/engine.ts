import { Paragraph, Table } from "docx";
import { AnyBlockDefinition, BlockDefinition, TemplateBlock } from "./type.block";
import { isGenericBlock, isMatchingDef } from "@/library/typeGuard";

// export function collectFields(template: any[], registry: BlockDefinition[]): Field[] {
//     const allFields = template.flatMap(block => {
//         const def = registry.find(r => r.type === block.type && (!r.name || r.name === block.name));
//         return def ? def.fields : [];
//     });

//     const unique: Field[] = [];
//     for (const f of allFields) {
//         if (!unique.find(u => u.key === f.key)) unique.push(f);
//     }
//     return unique;
// }

export const parseTemplate = (
    blocks: TemplateBlock[],
    data: any,
    registry: AnyBlockDefinition[]
): (Paragraph | Table)[] =>
    blocks.flatMap((block) => {
        for (const def of registry) {
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


