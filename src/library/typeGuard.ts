import { AnyBlockDefinition, IGenericBlock, TemplateBlock } from "@/blocks/type.block";
import { ApiResponse } from "./api";

export function isSuccess<T>(res: ApiResponse<T>): res is ApiResponse<T> & { data: T } {
    return res.success === true;
}

export const isGenericBlock = (block: TemplateBlock): block is IGenericBlock => {
    return block.type === "block";
};

export const isMatchingDef = (
    def: AnyBlockDefinition,
    block: TemplateBlock
): boolean =>
    def.type === block.type &&
    (!("name" in def) || (isGenericBlock(block) && def.name === block.name));




