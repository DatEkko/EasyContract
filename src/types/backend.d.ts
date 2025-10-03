export { };
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {
    interface IRequest {
        url: string;
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD'; // cụ thể hơn thay vì string
        body?: Record<string, unknown>;
        queryParams?: Record<string, string | number | boolean | undefined>;
        useCredentials?: boolean;
        headers?: Record<string, string>;
        nextOption?: RequestInit;
    }

    interface IBackendRes<T> {
        error?: string | string[];
        message: string;
        statusCode: number | string;
        data?: T;
    }

    interface IModelPaginate<T> {
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: number;
        },
        result: T[]
    }

    interface ILogin {
        user: {
            _id: string;
            name: string;
            email: string;
            role: string
        },
        access_token: string
    }

    interface IRegister {
        _id: string;
    }

    interface ITemplateFree {
        meta: PaginationMeta;
        results: TemplateItem[];
    }

    // Thông tin phân trang
    interface PaginationMeta {
        current: number;
        pageSize: number;
        pages: number;
        total: number;
    }

    // Template item
    interface TemplateItem {
        _id: string;
        name: string;
        description: string;
    }

    interface ITemplateStructure {
        _id: string;
        templateId: string;
        name: string;
        description: string;
        blocks: TemplateBlock[]
    }
}
