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

//History item
export interface IListHistory {
    meta: PaginationMeta;
    results: HistoryItem[];
}

export interface HistoryItem {
    _id: string;
    name: string;
    createdAt: string;
}

export interface IGetHistory extends ICreateHistory {
    _id: string;
    createdAt: string;
    updatedAt: string;
}