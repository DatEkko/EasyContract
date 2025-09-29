import { auth } from '@/auth';
import queryString from 'query-string';

export type ApiResponse<T> = T | { statusCode: number; message: string; error?: string };

export interface IRequest {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';
    body?: unknown;
    queryParams?: Record<string, string | number | boolean | undefined>; // cụ thể hơn
    useCredentials?: boolean;
    headers?: Record<string, string>;
    nextOption?: RequestInit;
}

export const sendRequest = async <T>(props: IRequest): Promise<ApiResponse<T>> => {
    const {
        url: rawUrl,
        method = 'GET',
        body,
        queryParams = {},
        useCredentials = false,
        headers = {},
        nextOption = {},
    } = props;

    const url =
        queryParams && Object.keys(queryParams).length > 0
            ? `${rawUrl}?${queryString.stringify(queryParams)}`
            : rawUrl;

    const options: RequestInit = {
        method,
        headers: new Headers({ 'Content-Type': 'application/json', ...headers }),
        ...nextOption,
    };

    if (body && method !== 'GET' && method !== 'HEAD') {
        options.body = JSON.stringify(body);
    }

    if (useCredentials) options.credentials = 'include';

    return fetch(url, options).then(async (res) => {
        const data = (await res.json()) as unknown;

        if (res.ok) return data as T;

        return {
            statusCode: res.status,
            message: (data as Record<string, unknown>)?.['message'] as string ?? '',
            error: (data as Record<string, unknown>)?.['error'] as string ?? '',
        } as ApiResponse<T>;
    });
};

export const sendAuRequest = async <T>(props: IRequest): Promise<ApiResponse<T>> => {
    const session = await auth();
    const token = session?.user?.access_token;

    if (!token) throw new Error('Not authenticated');

    return sendRequest<T>({
        ...props,
        headers: {
            ...(props.headers || {}),
            Authorization: `Bearer ${token}`,
        },
    });
};
