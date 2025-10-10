import { IDataFields, RowData, TemplateBlock } from "@/blocks/type.block";

export interface ICreateHistory {
    name?: string;
    templateId?: string;
    data?: {
        rows?: RowData[],
        formData?: IDataFields
    }
}

export interface IPostRes {
    _id: string;
}

export interface ITemplateFree {
    meta: PaginationMeta;
    results: TemplateItem[];
}

// Template item
export interface TemplateItem {
    _id: string;
    name: string;
    description: string;
}

export interface ITemplateStructure extends TemplateItem {
    templateId: string;
    blocks: TemplateBlock[]
}